import React from "react"

export const TableRow = ({date, title}) => {
  return (
    <tr className="text-sm bg-white dark:text-gray-400 dark:bg-gray-800">
      <td className="px-6 py-2 font-medium ">{date}</td>
      <td className="flex space-x-2 items-center px-6 py-2 ">
        <a href="#" className="flex border px-2 py-1 gap-1 rounded border-blue-500 justify-center items-center font-medium text-blue-600 hover:text-blue-500">
          Edit
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="w-4 h-4 bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
        </a>
        <a href="#" className="flex border px-2 py-1 gap-1 rounded border-red-500 justify-center items-center font-medium text-red-600 hover:text-red-500 dark:hover:text-red-300 dark:text-red-400">
          Delete
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="w-4 h-4 bi bi-trash-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg>
        </a>
        <button className="px-4 py-1 text-green-500 border border-green-500  rounded-md mx-2">View</button>
      </td>
      <td className="px-6 py-2 font-medium ">{title}</td>
    </tr>
  )
}
