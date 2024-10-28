import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai"; 

export default function Header({ searchTerm, setSearchTerm, toggleSidebar }) {
  return (
    <div className='flex flex-row justify-between items-center border-b border-gray-200 w-full bg-white h-16 px-4'>
      <div className="flex items-center">
        <button className="md:hidden" onClick={toggleSidebar}>
          <AiOutlineMenu fontSize={25} />
        </button>
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-2 p-2 border border-gray-300 rounded ml-2"
        />
      </div>
      <div className='flex items-center gap-5 mr-2'>
        <CiBellOn fontSize={25} />
        <Link to="/profile">
          <MdOutlineAccountCircle fontSize={25} />
        </Link>
      </div>
    </div>
  );
}
