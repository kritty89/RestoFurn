import React, { useState, useEffect, useCallback, useMemo } from 'react';
import apiService from '../components/apiService';
import { useLocation } from 'react-router-dom';
import ProductsNavbar from '../components/ProductsNavbar';
import ProductCard from '../components/ProductCard';
import '../css/Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const { user } = location.state || { user: null };

  const query = useMemo(() => new URLSearchParams(location.search), [location.search]);

  const fetchProducts = useCallback(async () => {
    try {
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
  }, [query]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="products-page">
      {!location.pathname.includes('productdetail') && <ProductsNavbar />}
      <div className="product-list">
      {user && <h3>Welcome, {user.firstName}!</h3>}
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} user={user} className='product-card' />
          ))
        ) : (
          <div>No products available</div>
        )}
      </div>
    </div>
  );
};

export default Products;