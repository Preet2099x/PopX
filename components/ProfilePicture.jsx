import React from 'react';

const ProfilePicture = () => {
  return (
    <div className="relative mr-4">
      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
        <div className="w-full h-full bg-gray-300"></div>
      </div>
      <div className="absolute bottom-0 right-0 bg-purple-600 rounded-full w-4 h-4 flex items-center justify-center">
        <span className="text-white text-xs">+</span>
      </div>
    </div>
  );
};

export default ProfilePicture;