import React from "react";
import { FaBox } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FaArchive } from "react-icons/fa";

import { IoMdArrowDropdown } from "react-icons/io";
function Footer() {
  return (
    <div>
      <div className="flex gap-8 border  rounded-md mb-16">
        <h1 className="flex items-center ">
          <FaBox className="ml-1" /> slected
        </h1>
        <h1 className="flex items-center ">
          {" "}
          <FaArchive />
          Archive
        </h1>
        <h1 className="flex items-center text-red-400">
          {" "}
          <MdDelete />
          Delete
        </h1>
        <h1 className="flex items-center ">
          More <IoMdArrowDropdown />
        </h1>
      </div>
    </div>
  );
}

export default Footer;
