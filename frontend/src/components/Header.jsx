// components/Header.jsx
import React from 'react';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
            <GlobeAltIcon className="h-8 w-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-800">AI Travel Advisor</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
