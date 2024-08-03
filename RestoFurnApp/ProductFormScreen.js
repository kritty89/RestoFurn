import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const ProductFormScreen = ({ navigation, route }) => {
  const { product } = route.params || {};
  const [name, setName] = useState(product ? product.name : '');
  const [price, setPrice] = useState(product ? product.price : '');

  const handleSave = async () => {
    const token = await AsyncStorage.getItem('userToken');
    try {
      if (product) {
        await axios.put(`YOUR_API_ENDPOINT/products/${product.id}`, { name, price }, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await axios.post('YOUR_API_ENDPOINT/products', { name, price }, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      navigation.navigate('Dashboard');
    } catch (error) {
      console.error('Failed to save product', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Text>Price:</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default ProductFormScreen;
