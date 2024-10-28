import React from 'react';
import { useAuth } from './Context/FakeAuthContext'; 

export default function Profile() {
    const { user } = useAuth(); 
    const name = user?.email.replace("@example.com", ""); 
    const email = user?.email;

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4">
                </div>
                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="" alt="Profile" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{email}</span>
                </div>
            </div>
        </div>
    );
}
