import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

// Components

// Screens
import Screen from './app/components/Screen';

// Navigator
import AuthNavigator from './app/navigation/AuthNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
