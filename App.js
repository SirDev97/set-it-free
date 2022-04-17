import { View, Image } from 'react-native';

// Components

import AppButton from './app/components/AppButton';
import Card from './app/components/Card';

// Screens

import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';

export default function App() {
  return <ListingsScreen />;
}
