import React from 'react'
import '../css/Products.css';
import ImageSlideshow from '../components/ImageSlideshow';
import ProductsNavbar from '../components/ProductsNavbar';

const images1 = [
  { url: 'https://via.placeholder.com/800x400.png?text=Slideshow+1+Image+1', alt: 'Slideshow 1 Image 1' },
  { url: 'https://via.placeholder.com/800x400.png?text=Slideshow+1+Image+2', alt: 'Slideshow 1 Image 2' },
  { url: 'https://via.placeholder.com/800x400.png?text=Slideshow+1+Image+3', alt: 'Slideshow 1 Image 3' }
];

function ProductDetail(){
    return (
      <div>
        <ProductsNavbar />
        <h2>Shop by Price</h2>
        <div className='category'>
          <div className='sub-category'>
            <h2>Under 25$</h2>
            <ImageSlideshow images={images1} />
          </div>
        </div>
      </div>
    );
  }
  
  export default ProductDetail