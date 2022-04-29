import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

// Components
import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from '../components/forms';
import Screen from '../components/Screen';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/forms/FormImagePicker';

// Hooks
import useLocation from '../hooks/useLocation';

// API
import listingsApi from '../api/listings';
import UploadScreen from './UploadScreen';

// Validation
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least one image.'),
});

const categories = [
  {
    label: 'Furniture',
    value: 1,
    backgroundColor: '#fc5c65',
    icon: 'floor-lamp',
  },
  { label: 'Cars', value: 2, backgroundColor: '#fd9644', icon: 'car' },
  { label: 'Cameras', value: 3, backgroundColor: '#fed330', icon: 'camera' },
  { label: 'Games', value: 4, backgroundColor: '#26de81', icon: 'cards' },
  {
    label: 'Clothing',
    value: 5,
    backgroundColor: '#2bcbba',
    icon: 'shoe-heel',
  },
  { label: 'Sports', value: 6, backgroundColor: '#45aaf2', icon: 'basketball' },
  {
    label: 'Movies & Music',
    value: 7,
    backgroundColor: '#4b7bec',
    icon: 'headphones',
  },
  {
    label: 'Books',
    value: 8,
    backgroundColor: '#9932CC',
    icon: 'book-open-page-variant',
  },
  { label: 'Other', value: 9, backgroundColor: '#D8BFD8', icon: 'apps' },
];

function ListingEditScreen() {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert('Could not save the listing.');
    }
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <Form
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        <FormImagePicker name="images" />

        <FormField maxLength={255} name="title" placeholder="Title" />

        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />

        <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />

        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />

        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
