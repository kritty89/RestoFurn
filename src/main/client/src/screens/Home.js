import React from 'react';
import '../css/App.css';
import '../css/Home.css';
import Image1 from '../assets/green_furniture.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner">
        <div className="text">
          <h1 className="home-title">Welcome to Furniture Resale</h1>
          <p className="home-subtitle">Your best choice for sustainable furniture solutions. Furniture recycling is the process of reusing
            or refurbishing furniture that would otherwise end up in a landfill. This process involves taking old, worn, or unwanted furniture
            and giving it a new lease of life, either by repairing it or repurposing it for a different use.</p>
        </div>
        <div className="image">
          <img src={Image1} alt='Furniture' className="hero-image" height={500} width={500} />
        </div>
      </div>
      <h2>How it works! </h2>
      <div className="working">
        <div className="donate">
          <h3 className="sub-head">1.Donate</h3>
          <p className="sub-text">
            User donates unwanted furnitures from their home. Easy to clear out old furniture since we pickup from your door step.
          </p>
        </div>

        <div className="repair">
          <h3 className="sub-head">2.Repair</h3>
          <p className="sub-text">
            We repair and clean the old furniture to give a new life.
          </p>
        </div>

        <div className="sale">
          <h3 className="sub-head">3.Sale</h3>
          <p className="sub-text">
            We list all the fixed furnitures for sale in our page for the user to choose from at an affordable rate.
          </p>
        </div>
      </div>

      <div className="home-content">
        <div className="testimonial-container">
          <h2>Testimonials</h2>
          <p className="testimonial">"Great service and high-quality furniture!" - Jane Doe</p>
          <p className="testimonial">"I love how easy it is to give my old furniture a new home." - John Smith</p>
        </div>
        <div className="recycling-benefits">
          <h2 className="recycling-title">Benefits of Recycling Furniture</h2>
          <ul className="recycling-list">
            <li>Reduces waste in landfills</li>
            <li>Conserves natural resources</li>
            <li>Supports local communities</li>
            <li>Reduces environmental impact</li>
          </ul>
        </div>
        <div className="home-video">
          <h2>Learn More About Recycling</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/your-video-id"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;