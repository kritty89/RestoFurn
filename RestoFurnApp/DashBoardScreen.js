import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const DashboardScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const token = await AsyncStorage.getItem('userToken');
      try {
        const response = await axios.get('YOUR_API_ENDPOINT/products', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    const token = await AsyncStorage.getItem('userToken');
    try {
      await axios.delete(`YOUR_API_ENDPOINT/products/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(products.filter(product => product.id !== productId));
    } catch (error) {
      console.error('Failed to delete product', error);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title="Add Product"
        onPress={() => navigation.navigate('ProductForm')}
      />
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Button
              title="Edit"
              onPress={() => navigation.navigate('ProductForm', { product: item })}
            />
            <Button
              title="Delete"
              onPress={() => handleDelete(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  productItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default DashboardScreen;
