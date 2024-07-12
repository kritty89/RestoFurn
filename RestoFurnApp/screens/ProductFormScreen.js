import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const ProductFormScreen = ({ route, navigation }) => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    // Add other fields as necessary
  });

  useEffect(() => {
    if (route.params && route.params.product) {
      setProduct(route.params.product);
    }
  }, [route.params]);

  const handleChange = (name, value) => {
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      if (product.id) {
        await axios.put(`YOUR_API_ENDPOINT/products/${product.id}`, product);
      } else {
        await axios.post('YOUR_API_ENDPOINT/products', product);
      }
      navigation.navigate('ProductList');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.id ? 'Edit Product' : 'Add Product'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={product.name}
        onChangeText={(text) => handleChange('name', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={product.description}
        onChangeText={(text) => handleChange('description', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={product.price}
        onChangeText={(text) => handleChange('price', text)}
        keyboardType="numeric"
      />
      {/* Add other fields as necessary */}
      <Button title="Save" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default ProductFormScreen;
