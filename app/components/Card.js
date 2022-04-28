import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

// Styles
import defaultStyles from '../config/defaultStyles';

// Components
import AppText from './AppText';

function Card({ title, subTitle, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: imageUrl }} />

        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>

          <AppText style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: defaultStyles.colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },

  detailsContainer: { padding: 20 },

  image: {
    width: '100%',
    height: 200,
  },

  subTitle: {
    color: defaultStyles.colors.secondary,
    fontWeight: 'bold',
  },

  title: {
    marginBottom: 7,
  },
});

export default Card;
