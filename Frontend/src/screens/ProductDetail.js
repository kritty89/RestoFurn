import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Snackbar } from '@mui/material';
import '../css/ProductDetail.css';
import ProductsNavbar from '../components/ProductsNavbar';
import apiService from '../components/apiService';
import { useCart } from '../contexts/CartContext';
import Products from './Products';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await apiService.fetchProductById(id);
      setProduct(response);
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ProductsNavbar />
      <div className='product-detail'>
        <h1>{product.furnitureName}</h1>
        <div className="image-container">
          <img src={product.coverImage || 'default_image_path.jpg'} alt={product.furnitureName} />
        </div>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Material: {product.material}</p>
        <p>Category: {product.furnitureType}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      <h2>Check other products from us!</h2>
      <Products />
      <Snackbar
        open={openSnackbar}
        autoHideDuration={1500}
        onClose={handleCloseSnackbar}
        message="Added to cart successfully"
      />
    </div>
  );
};

export default ProductDetail;
