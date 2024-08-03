import axios from 'axios';

const BASE_URL = 'http://localhost:8080/restofurn';
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
const apiService = {
  employeeLogin: async (email, password) => {
    try {
      const response = await axiosInstance.post('/elogin', { email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  createProduct: async (productData) => {
    try {
      const response = await axiosInstance.post('/product', productData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  updateProduct: async (id, productData) => {
    try {
      const response = await axiosInstance.put(`/product/${id}`, productData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  uploadImage: async (formData) => {
    const response = await axiosInstance.post('/upload-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
  deleteProduct: async (id) => {
    try {
      const response = await axiosInstance.delete(`/product/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default apiService;