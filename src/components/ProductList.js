import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import axios from 'axios';

const ProductList = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products'); 
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list" style={{ width: '30%', padding: '1rem' }}>
      {products.map(product => (
        <ProductItem 
          key={product.id}
          product={{
            ...product,
            image: product.image.startsWith('http') ? product.image : `http://localhost:5000/static/${product.image}`
          }}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
