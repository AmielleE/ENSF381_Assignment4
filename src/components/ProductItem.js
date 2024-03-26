/*
=================================================================================================================
Name: ProductItem.js
Assignment: 4
Author(s): Amielle El Makhzoumi, Diba Jamali
Submission: March 25th, 2024
=================================================================================================================
*/
import React, { useState } from 'react';

const ProductItem = ({ product, addToCart }) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleMouseEnter = () => {
        setShowDetails(true);
    };

    const handleMouseLeave = () => {
        setShowDetails(false);
    };

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="product-item">
            <img src={product.image} alt={product.name} style={{ width: '250px', height: '250px' }} />
            {/* Bind event handlers to the product name */}
            <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{product.name}</p>
            <p>Price: ${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            {/* Render product description if showDetails is true */}
            {showDetails && <p>{product.description}</p>}
        </div>
    );
};

export default ProductItem;