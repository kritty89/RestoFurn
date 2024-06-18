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
    fetchData: async () => {
      try {
        const response = await axiosInstance.get('/data');
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
  };
  
  export default apiService;