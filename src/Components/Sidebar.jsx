import React from 'react';
import { FaSignalMessenger } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`bg-neutral-900 w-60 h-screen p-3 flex flex-col text-white fixed md:relative transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
      <div className='flex items-center gap-2 px-1 py-3'>
        <FaSignalMessenger fontSize={30} />
        <span className="text-neutral-100 text-lg">EventSpotLite</span>
      </div>
      <nav className='flex-1'>
        <ul className='space-y-3'>
          <li className='flex items-center gap-2 px-1 py-3 hover:bg-neutral-800'>
            <FaHome fontSize={20} />
            <Link to="/" className='block p-2 rounded'>Home</Link>
          </li>
          <li className='flex items-center gap-2 px-1 py-3 hover:bg-neutral-800'>
            <AiOutlineMessage fontSize={20} />
            <Link to="/myevent" className='block p-2 rounded hover:bg-neutral-800'>MyEvents</Link>
          </li>
          <li className='flex items-center gap-2 px-1 py-3 hover:bg-neutral-800'>
            <IoIosLogIn fontSize={20} />
            <Link to="/login" className='block p-2 rounded hover:bg-neutral-800'>Login</Link>
          </li>
          <li className='flex items-center gap-2 px-1 py-3 hover:bg-neutral-800'>
            <IoIosLogOut fontSize={20} />
            <Link to="/logout" className='block p-2 rounded hover:bg-neutral-800'>Logout</Link>
          </li>
        </ul>
      </nav>
      <div className='mt-auto'>
        <p className='text-sm'>© 2024 Jatin Garg</p>
      </div>
    </div>
  );
}
