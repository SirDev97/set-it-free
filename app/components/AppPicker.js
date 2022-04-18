import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Styles
import defaultStyles from '../config/defaultStyles';

// Components
import { ListItemSeparator } from './lists';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({
  icon,
  items,
  selectedItem,
  onSelectItem,
  placeholder,
  width = '100%',
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.mediumGray}
              style={styles.icon}
            />
          )}

          {selectedItem ? (
            <AppText style={styles.text}> {selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.mediumGray}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button
            title="Close"
            color={defaultStyles.colors.secondary}
            onPress={() => setModalVisible(false)}
          />

          <FlatList
            data={items}
            ItemSeparatorComponent={ListItemSeparator}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item.label);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
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

  placeholder: {
    color: defaultStyles.colors.mediumGray,
    flex: 1,
  },

  textInput: defaultStyles.text,

  text: {
    flex: 1,
  },
});

export default AppPicker;
