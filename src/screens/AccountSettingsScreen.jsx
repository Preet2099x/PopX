import React from 'react';
import ProfilePicture from '../../components/ProfilePicture';

const AccountSettingsScreen = ({ userData }) => {
  // Handle case where no data is available
  const name = userData.fullName || 'User Name';
  const email = userData.email || 'user@example.com';

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="p-4 border-b">
        <h1 className="text-lg font-medium">Account Settings</h1>
      </div>
      
      <div className="p-4 flex items-center">
        <ProfilePicture />
        <div>
          <h2 className="font-bold">{name}</h2>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-gray-600">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
        
        {userData.phone && (
          <div className="mt-4 p-3 bg-gray-50 rounded-md">
            <h3 className="font-medium mb-2">Your Account Details</h3>
            <p><strong>Phone:</strong> {userData.phone}</p>
            {userData.company && <p><strong>Company:</strong> {userData.company}</p>}
            <p><strong>Agency:</strong> {userData.isAgency ? 'Yes' : 'No'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountSettingsScreen;