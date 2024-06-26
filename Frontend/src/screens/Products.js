
import React from 'react'
import '../css/Products.css';
import ImageSlideshow from '../components/ImageSlideshow';
import ProductMenu from '../components/ProductMenu';


<productMenu />
const images1 = [
  { url: 'https://via.placeholder.com/800x400.png?text=Slideshow+1+Image+1', alt: 'Slideshow 1 Image 1' },
  { url: 'https://via.placeholder.com/800x400.png?text=Slideshow+1+Image+2', alt: 'Slideshow 1 Image 2' },
  { url: 'https://via.placeholder.com/800x400.png?text=Slideshow+1+Image+3', alt: 'Slideshow 1 Image 3' }
];

const images2 = [
  { url: 'https://via.placeholder.com/800x400.png?text=Slideshow+2+Image+1', alt: 'Slideshow 2 Image 1' },
  { url: 'https://via.placeholder.com/800x400.png?text=Slideshow+2+Image+2', alt: 'Slideshow 2 Image 2' },
  { url: 'https://via.placeholder.com/800x400.png?text=Slideshow+2+Image+3', alt: 'Slideshow 2 Image 3' }
];

const images3 = [
  { url: 'https://via.placeholder.com/800x400.png?text=Slideshow+3+Image+1', alt: 'Slideshow 3 Image 1' },
  { url: 'https://via.placeholder.com/800x400.png?text=Slideshow+3+Image+2', alt: 'Slideshow 3 Image 2' },
  { url: 'https://via.placeholder.com/800x400.png?text=Slideshow+3+Image+3', alt: 'Slideshow 3 Image 3' }
];

function Products(){
  return (
    <div>
      <h2>Shop by Price</h2>
      <div className='category'>
        <div className='sub-category'>
          <h2>Under 25$</h2>
          <ImageSlideshow images={images1} />
        </div>

        <div className='sub-category'>
          <h2>Under 50$</h2>
          <ImageSlideshow images={images1} />
        </div>

        <div className='sub-category'>
          <h2>Under 75$</h2>
          <ImageSlideshow images={images1} />
        </div>

        <div className='sub-category'>
          <h2>Under 100$</h2>
          <ImageSlideshow images={images1} />
        </div>
      </div>

      <h2>Shop by Material</h2>
      <div className='category'>
        <div className='sub-category'>
          <h2>Wood</h2>
          <ImageSlideshow images={images1} />
        </div>

        <div className='sub-category'>
          <h2>Steel</h2>
          <ImageSlideshow images={images1} />
        </div>

        <div className='sub-category'>
          <h2>Plastic</h2>
          <ImageSlideshow images={images1} />
        </div>

        <div className='sub-category'>
          <h2>Fabric</h2>
          <ImageSlideshow images={images1} />
        </div>

      </div>


      <h2>Shop by Furniture Type</h2>
      <div className='category'>
        <div className='sub-category'>
          <h2>Table</h2>
          <ImageSlideshow images={images1} />
        </div>

        <div className='sub-category'>
          <h2>Sofa</h2>
          <ImageSlideshow images={images1} />
        </div>

        <div className='sub-category'>
          <h2>Chair</h2>
          <ImageSlideshow images={images1} />
        </div>

        <div className='sub-category'>
          <h2>Bed</h2>
          <ImageSlideshow images={images1} />
        </div>

        <div className='sub-category'>
          <h2>Desk</h2>
          <ImageSlideshow images={images1} />
        </div>

        <div className='sub-category'>
          <h2>Dressing Table</h2>
          <ImageSlideshow images={images1} />
        </div>

        <div className='sub-category'>
          <h2>Crib</h2>
          <ImageSlideshow images={images1} />
        </div>

      </div>

    </div>
  );
}

export default Products