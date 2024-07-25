import axios from 'axios';

const BASE_URL = 'http://localhost:8080/restofurn';
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
const apiService = {
    login: async (email, password) => {
      try {
        const response = await axiosInstance.post('/login', { email, password });
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    login: async (email, password) => {
      try {
        const response = await axiosInstance.post('/login', { email, password });
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    fetchProducts: async () => {
      try {
        const response = await axiosInstance.post('/products');
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    deleteProduct: async (id) => {
      try {
        const response = await axiosInstance.delete(`/products/${id}`);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    fetchFilteredProducts: async (filter) => {
      try {
        const response = await axiosInstance.post('/filter', filter);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    fetchProductById: async (id) => {
      try {
        const response = await axiosInstance.post(`/productdetail/${id}`);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    donate: async (donationData) => {
      try {
        const response = await axiosInstance.post('/donation', donationData);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    register: async (userData) => {
      try {
        const response = await axiosInstance.post('/register', userData);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    processOrder: async (orderDetails) => {
      try {
        const response = await axiosInstance.post('/order', orderDetails);
        return response.data;
      } catch (error) {
        throw error;
      }
    },

    processPayment:  async ({ url, data }) => {
      try {
        const response = await axiosInstance.post(url, data);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  };
  
  export default apiService;
