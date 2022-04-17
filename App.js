import { View, Image } from 'react-native';

// Components

import AppButton from './app/components/AppButton';
import Card from './app/components/Card';

// Screens

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';

export default function App() {
  return <MessagesScreen />;
}
