import React from "react";

function StyledTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">
              Name
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">
              Age
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">John Doe</td>
            <td className="border border-gray-300 px-4 py-2">28</td>
            <td className="border border-gray-300 px-4 py-2">john@example.com</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">Jane Smith</td>
            <td className="border border-gray-300 px-4 py-2">34</td>
            <td className="border border-gray-300 px-4 py-2">jane@example.com</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">Alice Brown</td>
            <td className="border border-gray-300 px-4 py-2">45</td>
            <td className="border border-gray-300 px-4 py-2">alice@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StyledTable;
