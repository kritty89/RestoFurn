import axios from 'axios';

const API_URL = 'http://localhost:8080/restofurn';

const apiService = {
  fetchProducts: () => axios.get(`${API_URL}/products`),
  fetchFilteredProducts: (filter) => axios.get(`${API_URL}/products`, { params: filter }),
  createProduct: (product) => axios.post(`${API_URL}/products`, product),
  updateProduct: (id, product) => axios.put(`${API_URL}/products/${id}`, product),
  deleteProduct: (id) => axios.delete(`${API_URL}/products/${id}`),
};

export default apiService;
