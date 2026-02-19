import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigation from './src/navigation/AppNavigation';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>
      <AppNavigation
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
      />
    </NavigationContainer>
  );
}