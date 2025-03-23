import React, { useState } from 'react';

const LoginScreen = ({ navigateTo, handleLogin }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setLoginData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!loginData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!loginData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = () => {
    if (validateForm()) {
      handleLogin(loginData);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Signin to your PopX account</h1>
        <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>
      
      <div className="mb-4">
        <label className="block text-purple-500 text-sm mb-1">Email Address</label>
        <input 
          type="email" 
          placeholder="Enter email address" 
          className={`w-full p-2 border rounded-md ${errors.email ? 'border-red-500' : ''}`}
          value={loginData.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>
      
      <div className="mb-6">
        <label className="block text-purple-500 text-sm mb-1">Password</label>
        <input 
          type="password" 
          placeholder="Enter password" 
          className={`w-full p-2 border rounded-md ${errors.password ? 'border-red-500' : ''}`}
          value={loginData.password}
          onChange={(e) => handleChange('password', e.target.value)}
        />
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
      </div>
      
      <button 
        className={`w-full py-3 rounded-md ${loginData.email && loginData.password ? 'bg-gray-400 text-white' : 'bg-gray-300 text-gray-700'}`}
        onClick={onSubmit}
      >
        Login
      </button>
    </div>
  );
};

export default LoginScreen;