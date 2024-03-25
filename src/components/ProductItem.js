import React, { useState } from 'react';

const ProductItem = ({ product, onAddToCart }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleMouseEnter = () => setShowDetails(true);

  const handleMouseLeave = () => setShowDetails(false);

  const handleAddToCartClick = () => {
    onAddToCart(product);
  };

  return (
    <div className="product-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={product.image} alt={product.name} className="product-image"/>
      <h3 className="product-name">{product.name}</h3>
      {showDetails && (
        <div className="product-details">
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price.toFixed(2)}</p>
        </div>
      )}
      <button className="add-to-cart-button" onClick={handleAddToCartClick}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
