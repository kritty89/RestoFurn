import React, { useState, useEffect } from 'react';
import apiService from '../components/apiService';
import { useLocation } from 'react-router-dom';
import ProductsNavbar from '../components/ProductsNavbar';
import ProductCard from '../components/ProductCard';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const query = useQuery();

  useEffect(() => {
    const fetchProducts = async () => {
      const filter = {
        material: query.get('material'),
        minPrice: query.get('minPrice'),
        maxPrice: query.get('maxPrice'),
        furnitureType: query.get('furnitureType'),
      };
      let response;
      if (filter.material || filter.minPrice || filter.maxPrice || filter.furnitureType) {
        response = await apiService.fetchFilteredProducts(filter);
      } else {
        response = await apiService.fetchProducts();
      }
      setProducts(response.data);
    };
    fetchProducts();
  }, [query]);

  return (
    <div className="products-page">
      <ProductsNavbar />
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;