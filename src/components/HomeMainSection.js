/*
=================================================================================================================
Name: HomeMainSection.js
Assignment : 4
Author(s) : Amielle El Makhzoumi, Diba Jamali
Submission : March 25th, 2024
=================================================================================================================
*/
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
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
    <div>
      <section className="about-us">
        <h2>About Us</h2>
        <p>Welcome to our online store! We are passionate about providing high-quality products and exceptional customer service. Learn more about our story and commitment to your satisfaction.</p>
        <button><Link to="/products">Shop Now</Link></button> 
      </section>
      <section className="customer-reviews">
        <h2>Customer Reviews</h2>
        <ul>
          {randomReviews.map((review, index) => (
            <li key={index}>
              <h3>{review.customerName}</h3>
              <p>{review.reviewContent}</p>
              <div className="rating">
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