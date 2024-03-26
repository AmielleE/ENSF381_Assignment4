/*
=================================================================================================================
Name: ProductItem.js
Assignment: 4
Author(s): Amielle El Makhzoumi, Diba Jamali
Submission: March 25th, 2024
=================================================================================================================
*/
import React, { useState } from 'react';

const ProductItem = ({ product, onAddToCart }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleMouseEnter = () => setShowDetails(true);

  const handleMouseLeave = () => setShowDetails(false);

  const handleAddToCartClick = () => {
    onAddToCart(product);
  };

  return (
    <div className="product-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ 
          padding: '1rem', marginBottom: '1rem' }}>
      <img src={product.image} alt={product.name} className="product-image" style={{ width: '85%', height: 'auto', 
            marginBottom: '0.5rem' }}/>
      <h3 className="product-name" style={{ fontSize: '1rem', margin: '0.5rem 0', fontWeight: 'normal', 
            display: 'block' }}>{product.name}</h3>
      {showDetails && (
        <div className="product-details">
          <p className="product-description" style={{ display: 'none' }}>{product.description}</p>
          <p className="product-price" style={{ fontSize: '1rem', color: '#333' }}>${product.price.toFixed(2)}</p>
        </div>
      )}
      <button className="add-to-cart-button" onClick={handleAddToCartClick} style={{ border: '1px solid black', 
                backgroundColor: 'transparent', padding: '0.5rem 1rem', color: 'black', marginTop: '1rem', 
                cursor: 'pointer', width: 'fit-content' }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;