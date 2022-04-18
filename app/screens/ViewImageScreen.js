import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Styles
import defaultStyles from '../config/defaultStyles';

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/chair.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.black,
    flex: 1,
  },
  deleteIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  closeIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ViewImageScreen;
