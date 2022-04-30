import React from 'react';
import { StyleSheet } from 'react-native';

import defaultStyles from '../../config/defaultStyles';

import AppText from '../AppText';

function ErrorMessage({ error, visible }) {
  if (!visible || !error) null;

  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: { color: defaultStyles.colors.danger },
});

export default ErrorMessage;
