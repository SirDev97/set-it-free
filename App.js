import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

// Components
import OfflineNotice from './app/components/OfflineNotice';

// Screens
import Screen from './app/components/Screen';

// Navigation
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';

export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
