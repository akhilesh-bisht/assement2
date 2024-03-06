import React from "react";
import { HiOutlineInbox } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

function TopNavbar({ setSearchTerm }) {
  return (
    <>
      <div className="h-14 w-full flex justify-between mt-2 ml-6">
        <h1 className="font-bold text-lg">Products</h1>
        <div className="flex justify-end mt-1 gap-6 relative">
          <div className="relative">
            <input
              className="outline-none border rounded-lg pl-8 pr-2 py-1 w-64"
              type="text"
              placeholder="Search file.."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-2 top-2 text-gray-500 cursor-pointer" />
          </div>
          <HiOutlineInbox className="text-2xl shadow-2xl cursor-pointer" />
          <IoMdSettings className="text-2xl mr-2 drop-shadow-2xl cursor-pointer" />
        </div>
      </div>
      <hr />
    </>
  );
}

export default TopNavbar;
