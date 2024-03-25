// ProductList.js
import React from 'react';
import ProductItem from './ProductItem';
import productsData from '../data/products'; // Make sure the path to your products data is correct

const ProductList = ({ onAddToCart }) => {
  return (
    <div className="product-list">
      {productsData.map(product => (
        <ProductItem 
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
