import React from "react"

const Card = ({cls, total, male, female}) => {
  return (
    <div className=" px-2 pb-20 lg:py-0 md:px-6">
      <div className="flex flex-wrap justify-center items-center -mx-3">
        <div className="px-3 mb-4">
          <div className="px-10 rounded-lg mx-auto py-2 bg-gradient-to-tr from-blue-200 to-red-100">
            <div className="text-2xl py-4  text-center font-bold">Class {cls}</div>
            <div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-6 h-6 mr-2 text-red-700 bi bi-people-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path
                    fillRule="evenodd"
                    d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                  />
                  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                </svg>
                <span className="mr-2 text-2xl font-semibold ">{total} </span> Students
              </div>
              <h3 className="text-lg text-black">{female} Female</h3>
              <h3 className="text-lg text-black">{male} Male</h3>
            </div>

            <div className="p-4">
              <a
                href="#"
                className="px-4 py-3 font-semibold text-center text-white bg-gradient-to-r from-blue-500 to-indigo-200 rounded"
              >
                View All
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
