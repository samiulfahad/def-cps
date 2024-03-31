import React from "react"
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom for the Link component

const TableRow = ({ bg, date, title }) => {
  // Parse the background index to an integer
  const bgIndex = parseInt(bg) || 0;

  // Determine the background color class based on the row index
  const bgClass = bgIndex % 2 === 0 ? "text-md bg-gray-100" : "text-md bg-white";

  return (
    <tr className={bgClass+ " w-full overflow-x-scroll"}>
      <td className="px-6 font-medium">{date}</td>
      <td className="px-6 py-4">
        <Link className="bg-blue-gray-500 text-white font-bold px-4 py-2 rounded-lg" to="#">View</Link>
      </td>
      <td className="px-6 py-4 text-center mx-auto w-full font-medium ">{title}</td>
    </tr>
  );
}

export default TableRow;
