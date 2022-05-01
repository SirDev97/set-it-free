import React from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';

// Styles
import defaultStyles from '../config/defaultStyles';

// Components
import AppText from '../components/AppText';
import { ListItem } from '../components/lists';
import ContactSellerForm from '../components/ContactSellerForm';

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
      <Image style={styles.image} source={{ uri: listing.images[0].url }} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>

        <AppText style={styles.price}>${listing.price}</AppText>

        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/alkin.jpg')}
            title="Alkin Maystorov"
            subTitle="5 Listings"
          />
        </View>

        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },

  image: {
    width: '100%',
    height: 300,
  },

  price: {
    color: defaultStyles.colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: '500',
  },

  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
