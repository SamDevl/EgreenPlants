import React, { useEffect } from 'react';
import './AboutUs.css';
import { useDispatch } from 'react-redux';
import { addItem } from './CreateSlice';

function AboutUs() {
  
  return (
    <div className="about-us-container">
      {/* About Us heading is commented out; you can uncomment it if needed */}
      {/* <h1 className="about-us-heading">About Us</h1> */}
      
      {/* Description about EGreen Plants */}
      <p className="about-us-description">
        Transform your space into a green haven with EGreen Plants—where every plant tells a story!
      </p>

      {/* Repeated content for emphasis, can be consolidated */}
      <p className="about-us-content">
        Welcome to EGreen Plants! We believe that every home deserves a touch of nature. Our carefully curated selection of indoor and outdoor plants not only beautifies your space but also promotes health and well-being. Whether you’re a seasoned plant parent or just starting your green journey, we have the perfect plants for you!
      </p>

      {/* Shop Now prompt and categories explanation */}
      <p className="about-us-content">
        
        Click On The <a onClick={handleGetStartedClick}><strong>Shop Now Button </strong></a>   To Explore Our Categories:

        <br />
        <strong>Air Purifying Plants:</strong> Discover our collection of plants that improve your indoor air quality while adding a vibrant touch to your decor. From the resilient Snake Plant to the elegant Peace Lily, breathe easier with nature at your side.<br />
        
        <strong>Aromatic Fragrant Plants:</strong> Transform your home into a fragrant oasis with our aromatic plants. Indulge in the soothing scent of Lavender or the sweet aroma of Jasmine and elevate your space.<br />
        
        <strong>Insect Repellent Plants:</strong> Keep pesky bugs at bay naturally! Our selection of insect-repelling plants not only protects your home but also adds beauty to your garden. Try our Marigold or Basil for a functional yet lovely touch.<br />
        
        <strong>Medicinal Plants:</strong> Embrace the healing power of nature with our medicinal plants. From soothing Aloe Vera to invigorating Echinacea, explore the natural remedies that can enhance your wellness.<br />
        
        <strong>Low Maintenance Plants:</strong> Perfect for busy lifestyles, our low-maintenance plants thrive on neglect. Check out the hardy ZZ Plant and resilient Pothos, ideal for beginners and seasoned plant lovers alike.<br />
      </p>
    </div>
  );
}

export default AboutUs;