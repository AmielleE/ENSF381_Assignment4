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
    <div className="product-item">
      <img src={product.image} alt={product.name} style={{ width: '250px', height: '250px' }} />
      <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{product.name}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button className="add-to-cart-button" onClick={handleAddToCartClick}>
        Add to Cart
      </button>
      {showDetails && <p>{product.description}</p>}
    </div>
  );
};

export default ProductItem;