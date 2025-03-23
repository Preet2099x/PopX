import React, { useState } from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import AccountSettingsScreen from './screens/AccountSettingsScreen';
import ProfilePicture from '../components/ProfilePicture';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    company: '',
    isAgency: false
  });

  // Handle screen navigation
  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  // Handle form input changes
  const handleInputChange = (field, value) => {
    setUserData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  // Handle login form submission
  const handleLogin = (loginData) => {
    // In a real app, you would validate credentials here
    // For now, we'll just update the userData with the login info
    setUserData(prevData => ({
      ...prevData,
      email: loginData.email,
      password: loginData.password
    }));
    navigateTo('accountSettings');
  };

  // Handle registration form submission
  const handleRegister = (formData) => {
    // Update all user data at once
    setUserData(formData);
    navigateTo('accountSettings');
  };

  // Render the current screen
  const renderScreen = () => {
    switch(currentScreen) {
      case 'welcome':
        return <WelcomeScreen navigateTo={navigateTo} />;
      case 'login':
        return <LoginScreen navigateTo={navigateTo} handleLogin={handleLogin} />;
      case 'createAccount':
        return (
          <CreateAccountScreen 
            userData={userData}
            handleInputChange={handleInputChange}
            navigateTo={navigateTo}
            handleRegister={handleRegister}
          />
        );
      case 'accountSettings':
        return <AccountSettingsScreen userData={userData} />;
      default:
        return <WelcomeScreen navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="max-w-md mx-auto h-screen bg-white border shadow">
      {renderScreen()}
    </div>
  );
};

export default App;