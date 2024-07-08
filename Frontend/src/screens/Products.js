import React, { useState, useEffect } from 'react';
import apiService from '../components/apiService';
import { useLocation } from 'react-router-dom';
import ProductsNavbar from '../components/ProductsNavbar';
import ProductCard from '../components/ProductCard';
import '../css/Products.css';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const query = useQuery();

  const fetchProducts = async () => {
    try{
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
    setProducts(response);
  } 
  catch (error) {
    console.error('Error fetching products:', error);
  }
};

  useEffect(() => {  
    fetchProducts();
  }, []);

return (
  <div className="products-page">
    <ProductsNavbar />
    <div className="product-list">
    {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div>No products available</div>
        )}
      </div>
    </div>
  );
};

export default Products;