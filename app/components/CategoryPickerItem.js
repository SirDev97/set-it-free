import React from 'react';
import { View, StyleSheet } from 'react-native';

// Styles
import defaultStyles from '../config/defaultStyles';
import AppText from './AppText';

// Components
import Icon from './Icon';

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 20,
    alignItems: 'center',
    width: '33%',
  },

  label: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default CategoryPickerItem;
