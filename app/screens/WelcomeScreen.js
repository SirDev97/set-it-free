import React from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';

// Components
import AppButton from '../components/AppButton';

function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require('../assets/WelcomeSceenBackground.jpg')}>
      <Image
        style={styles.logo}
        source={require('../assets/logoWithText.png')}
      />
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => console.log('Tapped')} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => console.log('Tapped')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
  logo: {
    width: 250,
    height: 250,
    position: 'absolute',
    top: 5,
  },
});

export default WelcomeScreen;
