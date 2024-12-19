import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

export const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-fraktur text-crimson-500 mb-8">Your Dark Profile</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="card-gothic p-8 space-y-6 md:col-span-2">
          <div className="flex items-center gap-6 border-b border-gothic-200/10 pb-6">
            <div className="w-24 h-24 rounded-full bg-gothic-800 border-2 border-crimson-500 flex items-center justify-center">
              <span className="text-4xl font-fraktur text-crimson-500">
                {user.name.charAt(0)}
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-gothic text-gothic-100">{user.name}</h2>
              <p className="text-gothic-200">{user.email}</p>
              <p className="text-sm text-crimson-500 mt-1">Member since 1970</p>
            </div>
          </div>

          {/* Profile Details */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="card-gothic p-4">
                <label className="block text-sm text-gothic-200 mb-1">Location</label>
                <p className="text-gothic-100">Gothic Realm</p>
              </div>
              <div className="card-gothic p-4">
                <label className="block text-sm text-gothic-200 mb-1">Style</label>
                <p className="text-gothic-100">Victorian Gothic</p>
              </div>
            </div>
            <div className="card-gothic p-4">
              <label className="block text-sm text-gothic-200 mb-1">Bio</label>
              <p className="text-gothic-100 italic">
                "Embracing the darkness and elegance of Victorian Gothic fashion..."
              </p>
            </div>
          </div>
        </div>

        {/* Actions Card */}
        <div className="space-y-4">
          <div className="card-gothic p-6">
            <h3 className="font-fraktur text-xl text-crimson-500 mb-4">Account Actions</h3>
            <div className="space-y-3">
              <button className="btn-gothic w-full">
                Edit Profile
              </button>
              <button className="w-full px-6 py-3 border-2 border-gothic-200/20 text-gothic-200 
                             hover:border-crimson-500 hover:text-crimson-500 transition">
                Change Password
              </button>
              <button 
                onClick={() => {
                  logout();
                  navigate('/login');
                }}
                className="w-full px-6 py-3 border-2 border-crimson-500/50 text-crimson-500 
                         hover:bg-crimson-500 hover:text-white transition"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Stats Card */}
          <div className="card-gothic p-6">
            <h3 className="font-fraktur text-xl text-crimson-500 mb-4">Your Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 border border-gothic-200/10">
                <p className="text-2xl font-fraktur text-crimson-500">0</p>
                <p className="text-sm text-gothic-200">Orders</p>
              </div>
              <div className="text-center p-3 border border-gothic-200/10">
                <p className="text-2xl font-fraktur text-crimson-500">0</p>
                <p className="text-sm text-gothic-200">Reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order History */}
        <div className="card-gothic p-6 md:col-span-3">
          <h3 className="font-fraktur text-xl text-crimson-500 mb-4">Recent Orders</h3>
          <div className="text-center py-8 text-gothic-200">
            <p className="italic">"Your order history awaits its first dark tale..."</p>
            <button 
              onClick={() => navigate('/products')}
              className="text-crimson-500 hover:text-crimson-600 transition mt-2 flex items-center gap-2 mx-auto"
            >
              <span>Begin Your Collection</span>
              <span className="text-lg">❧</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};