import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

import colors from '../config/colors';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/WelcomeSceenBackground.jpg')}>
      <Image
        style={styles.logo}
        source={require('../assets/logoWithText.png')}
      />

      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    position: 'absolute',
    top: 5,
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary,
  },
});

export default WelcomeScreen;
