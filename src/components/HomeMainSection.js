/*
=================================================================================================================
Name: HomeMainSection.js
Assignment : 4
Author(s) : Amielle El Makhzoumi, Diba Jamali
Submission : March 25th, 2024
=================================================================================================================
*/
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import reviews from '../data/reviews';

const HomeMainSection = () => {
  const [randomReviews, setRandomReviews] = useState([]);

  useEffect(() => {
    const getRandomReviews = () => {
      const shuffledReviews = reviews.sort(() => 0.5 - Math.random());
      const selectedReviews = shuffledReviews.slice(0, 2);
      setRandomReviews(selectedReviews);
    };
    getRandomReviews();
  }, []);

  return (
    <div style={{ padding: '10px' }}>
      <section className="about-us" style={{ marginTop: '25px' }}>
        <h2><b>About Us</b></h2>
        <p>Welcome to our online store! We are passionate about providing high-quality products and exceptional customer service. Learn more about our story and commitment to your satisfaction.</p>
        <Link to="/products">
          <button>Shop Now</button>
        </Link>
      </section>
      <section className="customer-reviews" style={{ marginTop: '40px' }}>
        <h2><b>Customer Reviews</b></h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {randomReviews.map((review, index) => (
            <li key={index} style={{ marginBottom: '20px' }}>
              <div style={{ marginBottom: '5px', fontWeight: 'normal' }}>
                {review.customerName}
              </div>
              <div style={{ marginBottom: '5px' }}>
                <p>{review.reviewContent}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ margin: '0', marginRight: '10px', fontWeight: 'normal' }}>Rating:</p>
                {Array.from({ length: review.stars }, (_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default HomeMainSection;
