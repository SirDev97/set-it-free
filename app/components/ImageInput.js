import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Styles
import defaultStyles from '../config/defaultStyles';

function ImageInput({ imageUri }) {
  return (
    <View style={styles.container}>
      {!imageUri && (
        <MaterialCommunityIcons
          name="camera"
          size={40}
          color={defaultStyles.colors.mediumGray}
        />
      )}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGray,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageInput;
