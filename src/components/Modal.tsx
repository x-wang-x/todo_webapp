import Button from "./Button";

interface props {
  id: string;
  closeModalFunction: () => void;
  value: {
    name: string;
  };
}
const Modal = ({ id, closeModalFunction, value }: props) => {
  return (
    <>
      {/* Main modal  */}
      <div
        id={id}
        tabIndex={-1}
        aria-hidden="true"
        className={`hidden fixed top-0 right-0 left-0 z-50 w-full md:w-3/5 mx-auto h-full bg-wx-dark text-wx-light`}
      >
        <div className="flex flex-col p-4 w-full h-full">
          {/* Modal header */}
            <div className="flex-none flex justify-between pb-1 mb-3 border-b-2 dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Add New Notes
              </h3>
              <button
                onClick={closeModalFunction}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle={id}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/*  Modal body  */}
            <div className="grow flex flex-col">
              <span className="mb-1">Note Name : </span>
              <input
                type="text"
                className="h-fit mb-3 pl-2 py-1 border border-wx-light bg-wx-dark text-wx-light focus:outline-none"
                defaultValue={value?.name}
              ></input>
              <span className="mb-1">Write Your Notes : </span>
              <textarea className="h-full overflow-scroll mb-3 pl-2 border border-wx-light bg-wx-dark text-wx-light focus:outline-none"></textarea>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex-none mt-3 pt-1 flex items-end border-t-2 border-wx-light justify-end gap-2">
              <Button onClick={() => alert("ok")} text="Add" />
              <Button onClick={() => closeModalFunction()} text="Cancel" />
            </div>
          </div>
        </div>
    </>
  );
};

export default Modal;
