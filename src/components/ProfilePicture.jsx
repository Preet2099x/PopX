import React from 'react';

const ProfilePicture = () => {
  return (
    <div className="relative mr-4">
      {/* Profile Image */}
      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
        <img 
          src="/defaultProfile.jpg" 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Add Icon */}
      <div className="absolute bottom-0 right-0 bg-purple-600 rounded-full w-4 h-4 flex items-center justify-center">
        <span className="text-white text-xs">+</span>
      </div>
    </div>
  );
};

export default ProfilePicture;
