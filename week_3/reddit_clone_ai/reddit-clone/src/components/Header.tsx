import { useState } from 'react';
import { FaReddit } from 'react-icons/fa';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-reddit-border sticky top-0 z-50">
      <div className="flex items-center justify-between h-12 px-5 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <FaReddit className="text-reddit-orange text-3xl mr-2" />
            <span className="text-black font-semibold text-lg hidden sm:inline-block">reddit</span>
          </a>
        </div>

        {/* Search */}
        <div className="hidden sm:flex flex-1 mx-6 max-w-[800px] relative">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search Reddit"
              className="w-full h-9 bg-reddit-hover rounded-full pl-10 pr-4 text-sm border border-transparent focus:border-blue-500 focus:outline-none"
            />
            <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-2 text-gray-400" />
          </div>
        </div>

        {/* Auth buttons */}
        <div className="flex items-center space-x-2">
          <button className="hidden sm:block rounded-full border border-reddit-link px-4 py-1 text-reddit-link font-bold hover:bg-blue-50">
            Log In
          </button>
          <button className="rounded-full bg-reddit-link text-white px-4 py-1 font-bold hover:bg-blue-600">
            Sign Up
          </button>

          {/* Mobile search icon */}
          <button className="sm:hidden">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
