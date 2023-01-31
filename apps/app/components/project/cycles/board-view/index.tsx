import React, { useCallback } from "react";
// swr
import useSWR, { mutate } from "swr";
// services
import { useRouter } from "next/router";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import stateService from "services/state.service";
// hooks
import useIssuesProperties from "hooks/use-issue-properties";
import useIssueView from "hooks/use-issue-view";
// components
import SingleBoard from "components/project/cycles/board-view/single-board";
// ui
import { Spinner } from "components/ui";
// types
import { CycleIssueResponse, IIssue, IProjectMember, UserAuth } from "types";
import issuesService from "services/issues.service";
// constants
import { STATE_LIST, CYCLE_ISSUES } from "constants/fetch-keys";

type Props = {
  issues: IIssue[];
  members: IProjectMember[] | undefined;
  openCreateIssueModal: (issue?: IIssue, actionType?: "create" | "edit" | "delete") => void;
  openIssuesListModal: () => void;
  handleDeleteIssue: React.Dispatch<React.SetStateAction<string | undefined>>;
  setPreloadedData: React.Dispatch<
    React.SetStateAction<
      | (Partial<IIssue> & {
          actionType: "createIssue" | "edit" | "delete";
        })
      | null
    >
  >;
  userAuth: UserAuth;
};

const CyclesBoardView: React.FC<Props> = ({
  issues,
  members,
  openCreateIssueModal,
  openIssuesListModal,
  handleDeleteIssue,
  setPreloadedData,
  userAuth,
}) => {
  const router = useRouter();
  const { workspaceSlug, projectId, cycleId } = router.query;

  const [properties] = useIssuesProperties(workspaceSlug as string, projectId as string);
  const { issueView, groupedByIssues, groupByProperty: selectedGroup } = useIssueView(issues);

  const { data: states } = useSWR(
    workspaceSlug && projectId ? STATE_LIST(projectId as string) : null,
    workspaceSlug && projectId
      ? () => stateService.getStates(workspaceSlug as string, projectId as string)
      : null
  );

  const handleOnDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) return;
      const { source, destination } = result;

      if (source.droppableId !== destination.droppableId) {
        const sourceGroup = source.droppableId; // source group id
        const destinationGroup = destination.droppableId; // destination group id
        if (!sourceGroup || !destinationGroup) return;

        // removed/dragged item
        const removedItem = groupedByIssues[source.droppableId][source.index];

        if (selectedGroup === "priority") {
          // update the removed item for mutation
          removedItem.priority = destinationGroup;

          // patch request
          issuesService.patchIssue(workspaceSlug as string, projectId as string, removedItem.id, {
            priority: destinationGroup,
          });
        } else if (selectedGroup === "state_detail.name") {
          const destinationState = states?.find((s) => s.name === destinationGroup);
          const destinationStateId = destinationState?.id;

          // update the removed item for mutation
          if (!destinationStateId || !destinationState) return;
          removedItem.state = destinationStateId;
          removedItem.state_detail = destinationState;

          // patch request
          issuesService.patchIssue(workspaceSlug as string, projectId as string, removedItem.id, {
            state: destinationStateId,
          });

          if (!cycleId) return;
          mutate<CycleIssueResponse[]>(
            CYCLE_ISSUES(cycleId as string),
            (prevData) => {
              if (!prevData) return prevData;
              const updatedIssues = prevData.map((issue) => {
                if (issue.issue_detail.id === removedItem.id) {
                  return {
                    ...issue,
                    issue_detail: removedItem,
                  };
                }
                return issue;
              });
              return [...updatedIssues];
            },
            false
          );
        }

        // remove item from the source group
        groupedByIssues[source.droppableId].splice(source.index, 1);
        // add item to the destination group
        groupedByIssues[destination.droppableId].splice(destination.index, 0, removedItem);
      }
    },
    [workspaceSlug, groupedByIssues, projectId, selectedGroup, states, cycleId]
  );

  if (issueView !== "kanban") return <></>;

  return (
    <>
      {groupedByIssues ? (
        <div className="h-[calc(100vh-157px)] lg:h-[calc(100vh-115px)] w-full">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <div className="h-full w-full overflow-hidden">
              <div className="h-full w-full">
                <div className="flex h-full gap-x-4 overflow-x-auto overflow-y-hidden">
                  {Object.keys(groupedByIssues).map((singleGroup) => (
                    <SingleBoard
                      key={singleGroup}
                      selectedGroup={selectedGroup}
                      groupTitle={singleGroup}
                      createdBy={
                        selectedGroup === "created_by"
                          ? members?.find((m) => m.member.id === singleGroup)?.member.first_name ??
                            "loading..."
                          : null
                      }
                      groupedByIssues={groupedByIssues}
                      bgColor={
                        selectedGroup === "state_detail.name"
                          ? states?.find((s) => s.name === singleGroup)?.color
                          : "#000000"
                      }
                      properties={properties}
                      openIssuesListModal={openIssuesListModal}
                      openCreateIssueModal={openCreateIssueModal}
                      handleDeleteIssue={handleDeleteIssue}
                      setPreloadedData={setPreloadedData}
                      stateId={
                        selectedGroup === "state_detail.name"
                          ? states?.find((s) => s.name === singleGroup)?.id ?? null
                          : null
                      }
                      userAuth={userAuth}
                    />
                  ))}
                </div>
              </div>
            </div>
          </DragDropContext>
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default CyclesBoardView;
