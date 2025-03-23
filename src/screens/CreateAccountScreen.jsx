import React, { useState } from 'react';

const CreateAccountScreen = ({ userData, handleInputChange, navigateTo, handleRegister }) => {
  const [formData, setFormData] = useState({
    fullName: userData.fullName || '',
    email: userData.email || '',
    phone: userData.phone || '',
    password: userData.password || '',
    company: userData.company || '',
    isAgency: userData.isAgency || false
  });
  const [errors, setErrors] = useState({});

  const updateField = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Also update parent state
    handleInputChange(field, value);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      handleRegister(formData);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Create your PopX account</h1>
      </div>
      
      <div className="mb-4">
        <label className="block text-purple-500 text-sm mb-1">Full Name*</label>
        <input 
          type="text" 
          placeholder="Enter your full name"
          className={`w-full p-2 border rounded-md ${errors.fullName ? 'border-red-500' : ''}`}
          value={formData.fullName}
          onChange={(e) => updateField('fullName', e.target.value)}
        />
        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block text-purple-500 text-sm mb-1">Phone number*</label>
        <input 
          type="tel" 
          placeholder="Enter your phone number"
          className={`w-full p-2 border rounded-md ${errors.phone ? 'border-red-500' : ''}`}
          value={formData.phone}
          onChange={(e) => updateField('phone', e.target.value)}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block text-purple-500 text-sm mb-1">Email address*</label>
        <input 
          type="email" 
          placeholder="Enter your email address"
          className={`w-full p-2 border rounded-md ${errors.email ? 'border-red-500' : ''}`}
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block text-purple-500 text-sm mb-1">Password*</label>
        <input 
          type="password" 
          placeholder="Create a password"
          className={`w-full p-2 border rounded-md ${errors.password ? 'border-red-500' : ''}`}
          value={formData.password}
          onChange={(e) => updateField('password', e.target.value)}
        />
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
      </div>
      
      <div className="mb-6">
        <label className="block text-purple-500 text-sm mb-1">Company name</label>
        <input 
          type="text" 
          placeholder="Enter your company name (optional)"
          className="w-full p-2 border rounded-md"
          value={formData.company}
          onChange={(e) => updateField('company', e.target.value)}
        />
      </div>
      
      <div className="mb-6">
        <p className="mb-2">Are you an Agency?*</p>
        <div className="flex items-center">
          <div className="mr-4 flex items-center">
            <input 
              type="radio" 
              id="agency-yes" 
              name="isAgency" 
              checked={formData.isAgency} 
              onChange={() => updateField('isAgency', true)}
              className="mr-1"
            />
            <label htmlFor="agency-yes">Yes</label>
          </div>
          <div className="flex items-center">
            <input 
              type="radio" 
              id="agency-no" 
              name="isAgency" 
              checked={!formData.isAgency} 
              onChange={() => updateField('isAgency', false)}
              className="mr-1"
            />
            <label htmlFor="agency-no">No</label>
          </div>
        </div>
      </div>
      
      <div className="mt-auto">
        <button 
          className={`w-full py-3 rounded-md ${
            formData.fullName && formData.phone && formData.email && formData.password 
              ? 'bg-purple-600 text-white' 
              : 'bg-purple-300 text-gray-100'
          }`}
          onClick={handleSubmit}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default CreateAccountScreen;