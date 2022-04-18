import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Styles
import defaultStyles from '../config/defaultStyles';

function AppTextInput({ icon, width = '100%', ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.mediumGray}
          style={styles.icon}
        />
      )}

      <TextInput
        placeholderTextColor={defaultStyles.colors.mediumGray}
        style={styles.textInput}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGray,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },

  icon: {
    marginRight: 10,
  },

  textInput: defaultStyles.text,
});

export default AppTextInput;
