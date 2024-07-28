import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../css/ProductDetail.css';
import ProductsNavbar from '../components/ProductsNavbar';
import apiService from '../components/apiService';
import { useCart } from '../contexts/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await apiService.fetchProductById (id);
      setProduct(response);
    };
    fetchProduct();
  }, [id]);

  if (!product) { 
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ProductsNavbar />
      <div className='product-detail'>
        <h1>{product.furnitureName}</h1>
        <div className="image-container">
          <img src={product.coverImage || 'default_image_path.jpg'} alt={product.furnitureName}/>
        </div>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Material : {product.material}</p>
        <p>Category : {product.furnitureType}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
