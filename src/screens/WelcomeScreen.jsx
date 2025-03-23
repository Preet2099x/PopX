import React from 'react';

const WelcomeScreen = ({ navigateTo }) => {
  return (
<div className="flex flex-col h-full bg-white p-4 border-t border-b border-gray-300">
<div className="flex-grow"></div>
      <div className="mb-10">
        <h1 className="text-2xl font-bold mb-1">Welcome to PopX</h1>
        <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        <button 
          className="w-full bg-purple-600 text-white py-3 rounded-md mb-3"
          onClick={() => navigateTo('createAccount')}
        >
          Create Account
        </button>
        
        <button 
          className="w-full bg-purple-200 text-gray-700 py-3 rounded-md"
          onClick={() => navigateTo('login')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;