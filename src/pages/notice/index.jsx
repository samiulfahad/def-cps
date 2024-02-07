import React from "react"
import TableRow from "./TableRow"

const Notice = () => {
  return (
    <section className="items-center lg:flex bg-blue-50 font-poppin pb-20">
      <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="pt-4 rounded shadow bg-white">
          <div className="flex px-6 pb-4 border-b">
            <h2 className="text-xl font-bold">Notice Board</h2>
          </div>
          <div className="p-4 overflow-x-auto">
            <table className="w-full table-auto">
              {/* <thead>
                <tr className="text-lg text-left text-gray-500">
                  <th className="px-6 pb-3 font-medium">Date </th>
                  <th className="px-6 pb-3 font-medium ">Action </th>
                  <th className="px-6 pb-3 font-medium"> Title </th>
                </tr>
              </thead> */}
              <tbody>
                <TableRow bg="0" date="12/02/24" title="Assignment for className 5"/>
                <TableRow bg="1" date="10/02/24" title="Exam Fee for className 4"/>
                <TableRow bg="2" date="08/02/24" title="Annual sports day 2024"/>
                <TableRow bg="3" date="05/02/24" title="Result of 1st Term Exam"/>
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Notice
