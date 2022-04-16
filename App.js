import { View } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import {} from '@expo/vector-icons';
import AppButton from './app/components/AppButton';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <AppButton title="Login" onPress={() => console.log('Tapped')} />
    </View>
  );
}
