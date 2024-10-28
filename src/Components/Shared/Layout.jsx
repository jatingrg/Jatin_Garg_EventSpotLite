import React, { useState } from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';

export default function Layout() {
    const [searchTerm, setSearchTerm] = useState("");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className={`flex-1 flex flex-col h-full transition-transform duration-300 ${isSidebarOpen ? 'ml-60' : 'ml-0'} md:ml-0`}>
                <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} toggleSidebar={toggleSidebar} />
                <div className='flex-1 overflow-y-auto'>
                    <Outlet context={{ searchTerm }} />
                </div>
            </div>
        </div>
    );
}
