import React from "react";
import { IoIosWallet } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { BiSort } from "react-icons/bi";
import { IoFilter } from "react-icons/io5";
import { SiGooglemeet } from "react-icons/si";
import { FaFileImport } from "react-icons/fa6";
import { IoPeopleCircleOutline } from "react-icons/io5";

function Container({ rowData, searchTerm }) {
  const filteredData = rowData.filter((row) =>
    row.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex mt-2 ml-6 items-center gap-4 font-medium">
        <div className="flex items-center border rounded-md bg-gray-200 px-2 cursor-pointer  hover:bg-gray-500">
          <IoIosWallet className="mr-1" />
          <span className="mr-1">All brands</span> <FaCaretDown />
        </div>
        <div className="flex items-center border rounded-md bg-gray-200 px-2 cursor-pointer hover:bg-gray-500">
          <span className="mr-1">Dask</span> <FaCaretDown />
        </div>
        <div className="flex items-center border rounded-md bg-gray-200 px-2 cursor-pointer hover-bg-gray-500">
          <span className="mr-1">Tags</span> <FaCaretDown />
        </div>
        <div className="flex items-center border rounded-md bg-gray-200 px-2 cursor-pointer hover-bg-gray-500">
          <BiSort />
          <span className="mr-1">Sort</span>
        </div>
        <div className="flex items-center border rounded-md bg-gray-200 px-2 cursor-pointer hover-bg-gray-500">
          <IoFilter />
          <span className="mr-1">Filter</span>
        </div>
        <div className="flex gap-4 ml-auto">
          <div className="flex items-center border rounded-md cursor-pointer px-2 bg-gray-200 hover-bg-gray-500">
            <SiGooglemeet />
            <span>Meeting</span>
          </div>
          <div className="flex items-center border rounded-md cursor-pointer px-2 bg-gray-200">
            <FaFileImport />
            <span>Import/Export</span>
          </div>
        </div>
      </div>

      <table className="w-full border-collapse border mt-6">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">
              Brand <span className="ml-16">+</span>
            </th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Members</th>
            <th className="border p-2">Categories</th>
            <th className="border p-2">Tags</th>
            <th className="border p-2">Next meeting</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
            >
              <td className="border p-2 flex ">
                <input className="mr-1" type="checkbox" value="" /> {row.brand}
                <IoPeopleCircleOutline className="ml-16" />
              </td>
              <td className="border p-2">{row.description}</td>
              <td className="border p-2 flex">
                {row.members.map((member, i) => (
                  <IoPeopleCircleOutline key={i} />
                ))}
              </td>
              <td className="border text-blue-600 ">
                <p className="bg-slate-300 rounded-md py-1 px-1 text-center">
                  {row.categories}
                </p>
              </td>
              <td className="border p-2">
                <p className="border px-1 rounded-md bg-slate-100 text-center">
                  {row.tags}
                </p>
              </td>
              <td className="border p-2">
                <h1 className="border bg-green-200 rounded-md text-center">
                  {row.nextMeeting}
                </h1>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Container;
