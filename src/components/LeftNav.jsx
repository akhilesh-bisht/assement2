import React, { useState } from "react";
import { BsFilesAlt } from "react-icons/bs";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { IoIosHelpCircleOutline } from "react-icons/io";
const TeamSection = ({ title, count }) => (
  <div className="flex justify-between mt-2 hover:bg-slate-200 cursor-pointer">
    <h1>{title}</h1>
    <span className="border px-2 bg-gray-200 ml-9">{`x${count + 1}`}</span>
  </div>
);

const FolderItem = ({ name, subfolders }) => {
  const [showSubfolders, setShowSubfolders] = useState(false);

  const toggleSubfolders = () => {
    setShowSubfolders(!showSubfolders);
  };

  return (
    <li className="flex font-medium items-center">
      <span className="cursor-pointer" onClick={toggleSubfolders}></span>
      <BsFilesAlt className="mr-2" />
      {name}

      {showSubfolders && (
        <ul className="list-none ml-4">
          {subfolders.map((subfolder, index) => (
            <FolderItem
              key={index}
              name={subfolder.name}
              subfolders={subfolder.subfolders}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

function LeftNav() {
  const [showFolders, setShowFolders] = useState(false);

  const teams = [
    { title: "Design Team", count: 0 },
    { title: "Marketing Team", count: 0 },
    { title: "Development Team", count: 0 },
  ];

  const folders = [
    {
      name: "Products",
      subfolders: [
        { name: "Roadmap" },
        { name: "Feedback" },
        { name: "Performance" },
        { name: "team" },
      ],
    },
    { name: "Sales", subfolders: [] },
    { name: "Design", subfolders: [] },
    { name: "Office", subfolders: [] },
    { name: "Legal", subfolders: [] },
  ];

  const toggleFolders = () => {
    setShowFolders(!showFolders);
  };

  return (
    <>
      <nav className="h-full w-[25%] md:w-[18%] border shadow-sm">
        <div className="flex flex-col items-center shadow-xl p-4 justify-center">
          <h1>INC</h1>
          <p className="font-bold">InnovlaHUB</p>
          <div className="mt-4 font-bold outline-1 outline-inherit">
            {teams.map((team, index) => (
              <TeamSection key={index} {...team} />
            ))}
            <p className="text-slate-500 mt-2">Create a video</p>
          </div>
        </div>
        <div className="mt-8 m-auto p-5">
          <div className="flex justify-between items-center">
            <h1 className="text-slate-500 font-medium">FOLDERS</h1>
            <span className="text-2xl cursor-pointer" onClick={toggleFolders}>
              {showFolders ? "-" : "+"}
            </span>
          </div>
          {showFolders && (
            <div>
              <ul className="list-none">
                {folders.map((folder, index) => (
                  <FolderItem
                    key={index}
                    name={folder.name}
                    subfolders={folder.subfolders}
                  />
                ))}
              </ul>
            </div>
          )}
          <div className="mt-14 flex items-center font-semibold ">
            <FaPersonCirclePlus />
            <p className="ml-2 text-sm">Invite Informations</p>
          </div>
          <div className=" mt-2 flex items-center font-semibold">
            <IoIosHelpCircleOutline />
            <p className="ml-2 text-sm">Help and first steps</p>
          </div>
          <div className=" mt-8 flex items-center font-semibold">
            <IoIosHelpCircleOutline />
            <p className="ml-2 text-sm">7 days left on tril</p>
            <button className="bg-black text-sm text-white rounded-lg px-2 ml-1  py-1">
              Add biling
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default LeftNav;
