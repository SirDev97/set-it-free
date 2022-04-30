import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useNetInfo } from '@react-native-community/netinfo';

// Styles
import defaultStyles from '../config/defaultStyles';

// Components
import AppText from './AppText';

function OfflineNotice(props) {
  const netInfo = useNetInfo();

  console.log(netInfo);
  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: defaultStyles.colors.primary,
    height: 50,
    position: 'absolute',
    top: Constants.statusBarHeight,
    zIndex: 1,
    width: '100%',
  },

  text: { color: defaultStyles.colors.white },
});

export default OfflineNotice;
