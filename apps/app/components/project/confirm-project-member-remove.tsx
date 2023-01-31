import React, { useRef, useState } from "react";
// headless ui
import { Dialog, Transition } from "@headlessui/react";
// icons
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
// ui
import { Button } from "components/ui";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  handleDelete: () => void;
  data?: any;
};

const ConfirmProjectMemberRemove: React.FC<Props> = ({ isOpen, onClose, data, handleDelete }) => {
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const cancelButtonRef = useRef(null);

  const handleClose = () => {
    onClose();
    setIsDeleteLoading(false);
  };

  const handleDeletion = async () => {
    setIsDeleteLoading(true);
    handleDelete();
    handleClose();
  };

  return (
    <Transition.Root show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="relative z-20"
        initialFocus={cancelButtonRef}
        onClose={handleClose}
      >
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-20 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        Remove {data?.email}?
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to remove member - {`"`}
                          <span className="italic">{data?.email}</span>
                          {`"`} ? They will no longer have access to this project. This action
                          cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <Button
                    type="button"
                    onClick={handleDeletion}
                    theme="danger"
                    disabled={isDeleteLoading}
                    className="inline-flex sm:ml-3"
                  >
                    {isDeleteLoading ? "Removing..." : "Remove"}
                  </Button>
                  <Button
                    type="button"
                    theme="secondary"
                    className="inline-flex sm:ml-3"
                    onClick={handleClose}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ConfirmProjectMemberRemove;
