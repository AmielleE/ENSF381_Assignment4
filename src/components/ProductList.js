/*
=================================================================================================================
Name: ProductList.js
Assignment: 4
Author(s): Amielle El Makhzoumi, Diba Jamali
Submission: March 25th, 2024
=================================================================================================================
*/
import React from 'react';
import ProductItem from './ProductItem';
import productsData from '../data/products'; 

const ProductList = ({ onAddToCart }) => {
  return (
    <div className="product-list" style={{ width: '30%', padding: '1rem' }}>
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