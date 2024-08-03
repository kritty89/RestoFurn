import React from 'react';
import '../css/App.css';
import '../css/Home.css';
import Image1 from '../assets/green_furniture.jpg';
import Video1 from '../assets/carpentry.mp4';
import ListIcon from '@mui/icons-material/List';
import HandymanIcon from '@mui/icons-material/Handyman';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner">
        <div className="text">
          <h1 className="home-title">Welcome to RestoFurn</h1>
          <p className="home-subtitle">
            Your best choice for sustainable furniture solutions. At RestoFurn, we believe in giving furniture a second chance.
            Our mission is to reduce waste and support local communities by recycling and refurbishing furniture that would otherwise
            end up in landfills. By choosing us, you are contributing to a more sustainable future and helping families in need.
          </p>
        </div>
        <div className="image">
          <img src={Image1} alt='Furniture' className="hero-image" height={500} width={500} />
        </div>
      </div>

      <h2>How It Works</h2>
      <div className="working">
        <div className="working-box">
          <h3 className="sub-head">1. Donate</h3>
          <VolunteerActivismIcon />
          <p className="sub-text">
            Donate used furniture from your home or contribute new items for charity. Your donations help support our mission and provide quality furniture to those in need.
          </p>
        </div>

        <div className="working-box">
          <h3 className="sub-head">2. Pickup</h3>
          <LocalShippingIcon size={70} />
          <p className="sub-text">
            We offer convenient pickup services directly from your doorstep, making the donation process hassle-free for you.
          </p>
        </div>

        <div className="working-box">
          <h3 className="sub-head">3. Repair</h3>
          <HandymanIcon />
          <p className="sub-text">
            Our skilled team repairs and refurbishes old furniture to restore its beauty and functionality, ensuring it has a new lease on life.
          </p>
        </div>

        <div className="working-box">
          <h3 className="sub-head">4. Sale</h3>
          <ListIcon />
          <p className="sub-text">
            Refurbished furniture is listed on our website for sale, where you can find unique, high-quality pieces at affordable prices.
          </p>
        </div>
      </div>

      <div className="home-content">

        <div className="recycling-benefits">
          <h2 className="recycling-title">Why Recycle Furniture?</h2>
          <ul className="recycling-list">
            <li>Reduces waste in landfills and conserves valuable resources</li>
            <li>Supports local communities by providing affordable furniture</li>
            <li>Reduces environmental impact through eco-friendly practices</li>
            <li>Promotes a sustainable lifestyle and encourages responsible consumption</li>
          </ul>
        </div>

        <div className="home-video">
          <h2>Learn More About Furniture Recycling</h2>
          <iframe
            width="560"
            height="315"
            src={Video1}
            title="Educational Video on Furniture Recycling"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="our-impact">
          <h2>Our Impact</h2>
          <p>
            Since our inception, RestoFurn has successfully diverted thousands of furniture pieces from landfills, contributed to numerous local homebuilding projects, and supported Habitat for Humanity's mission. Each donation and purchase helps us make a tangible difference in the community and the environment.
          </p>
          <p>
            Join us in our journey to create a more sustainable future. Together, we can make a positive impact, one piece of furniture at a time.
          </p>
        </div>

        <div className="get-involved">
          <h2>Get Involved</h2>
          <p>
            There are many ways to support RestoFurn and our mission. Consider donating your furniture, volunteering with us, or spreading the word about our cause. Every bit helps us achieve our goals and make a difference in the lives of those we serve.
          </p>
          <p>
            Visit our website or contact us to learn more about how you can get involved and contribute to our efforts.
          </p>
        </div>

        <div className="testimonial-container">
          <h2>What Our Customers Say</h2>
          <p className="testimonial">
            "Great service and high-quality furniture! I was impressed by how easy the process was and the impact my donation made." - Jane Doe
          </p>
          <p className="testimonial">
            "I love how RestoFurn gives my old furniture a new home while supporting a great cause. The refurbished pieces are beautiful and affordable." - John Smith
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
