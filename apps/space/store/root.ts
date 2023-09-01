// mobx lite
import { enableStaticRendering } from "mobx-react-lite";
// store imports
import UserStore from "./user";
import IssueStore, { IIssueStore } from "./issue";
import ProjectStore, { IProjectStore } from "./project";
import IssueDetailStore, { IIssueDetailStore } from "./issue_details";

enableStaticRendering(typeof window === "undefined");

export class RootStore {
  user: UserStore;
  issue: IIssueStore;
  issueDetails: IIssueDetailStore;
  project: IProjectStore;

  constructor() {
    this.user = new UserStore(this);
    this.issue = new IssueStore(this);
    this.project = new ProjectStore(this);
    this.issueDetails = new IssueDetailStore(this);
  }
}
