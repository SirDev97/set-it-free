import React from 'react';
import { StyleSheet, View } from 'react-native';

// Styles
import defaultStyles from '../../config/defaultStyles';

function ListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: defaultStyles.colors.lightGray,
  },
});

export default ListItemSeparator;
