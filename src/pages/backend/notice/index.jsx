import { useState } from "react"
import { TableRow } from "./TableRow"
import Modal from "../../../common/Modal"
import NewNotice from "./NewNotice"
import ScrollingText from "../../notice/ScrollingText"
const UploadNotice = () => {
  const [showModal, setModal] = useState(false)
  const [title, setTitle] = useState("")
  const onTitleChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <section className="bg-blue-50 min-h-screen">
      {showModal && (
        <Modal
          title="Upload New Notice"
          onClose={() => setModal(false)}
          content={<NewNotice onTitleChange={onTitleChange} />}
        />
      )}

      <div className="flex flex-col justify-center items-center mx-auto">
        <div className="bg-white px-4 py-2 border-2 m-4 rounded-md border-blue-500 hover:bg-blue-50 duration-200 flex justify-center items-center">
          <button onClick={() => setModal(true)} className="px-4 py-2 text-blue-500 font-bold ">
            {" "}
            Upload New Notice{" "}
          </button>
          <span className="text-blue-500 dark:text-gray-400">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="w-8 h-8 bi bi-cloud-upload"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
              />
              <path
                fillRule="evenodd"
                d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
              />
            </svg>
          </span>
        </div>

        <section className="items-center w-full md:w-2/3 mx-auto lg:flex bg-white font-poppins mb-20 ">
          <div className="justify-center flex-1 min-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div className="pt-4 rounded shadow bg-stone-100 dark:bg-gray-900">
              <div>
                <h2 className="mb-4 text-xl text-center font-bold md:mb-0 dark:text-gray-400">All Notices</h2>
              </div>
              <div className="p-2 overflow-x-auto">
                <table className="table-auto">
                  <thead>
                    <tr className="text-sm text-left text-gray-500 dark:text-gray-400">
                      <th className="px-6 pb-3 font-medium">Created </th>
                      <th className="px-6 pb-3 font-medium"> Action</th>
                      <th className="px-6 pb-3 font-medium">Title </th>
                    </tr>
                  </thead>

                  <tbody>
                    <TableRow date="12/02/24" title="Assignment Submission" />
                    <TableRow date="10/02/24" title="Exam Result" />
                    <TableRow date="08/02/24" title="Exam Fee colection" />
                    <TableRow date="01/02/24" title="Class Routine" />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default UploadNotice
