import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

// Styles
import defaultStyles from '../config/defaultStyles';

// Components
import { ListItem, ListItemSeparator } from '../components/lists';
import Icon from '../components/Icon';
import Screen from '../components/Screen';

// Routes
import routes from '../navigation/routes';

// Hooks
import useAuth from '../hooks/useAuth';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: defaultStyles.colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: defaultStyles.colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require('../assets/alkin.jpg')}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          onPres
        />
      </View>

      <ListItem
        title="Log Out"
        IconComponent={
          <Icon name="logout" backgroundColor={defaultStyles.colors.accent} />
        }
        onPress={() => logOut()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },

  screen: {
    backgroundColor: defaultStyles.colors.lightGray,
  },
});

export default AccountScreen;
