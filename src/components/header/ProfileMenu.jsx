import React from 'react';
import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { useAuthStore } from '../../store/authStore';

export const ProfileMenu = () => {
  const { user, isAuthenticated, logout } = useAuthStore();
  
  if (!isAuthenticated) return null;
  
  return (
    <div className="relative group">
      <div className="flex items-center gap-2 cursor-pointer">
        <UserCircleIcon className="w-6 h-6 text-gothic-100" />
        <span className="text-gothic-100">{user?.name}</span>
      </div>
      
      <div className="absolute right-0 mt-2 w-48 py-2 bg-gothic-800 border border-gothic-200/10 
                    shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <Link
          to="/profile"
          className="block px-4 py-2 text-gothic-100 hover:bg-gothic-700 transition"
        >
          Profile
        </Link>
        <button
          onClick={logout}
          className="w-full px-4 py-2 text-left text-gothic-100 hover:bg-gothic-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};