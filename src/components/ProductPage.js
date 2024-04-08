/*
=================================================================================================================
Name: ProductPage.js
Assignment: 4
Author(s): Amielle El Makhzoumi, Diba Jamali
Submission: March 25th, 2024
=================================================================================================================
*/
import React, { useState, useEffect } from 'react';
import Header from './Header'; 
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer'; 

const ProductPage = () => {
  const [cartItems, setCartItems] = useState(() => {
   
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleUpdateCartQty = (productId, quantity) => {
    setCartItems(cartItems.map(item =>
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <div>
      <Header />
      <main>
        <ProductList products={productsData} onAddToCart={handleAddToCart} />
        <Cart 
          cartItems={cartItems} 
          onUpdateCartQty={handleUpdateCartQty} 
          onRemoveFromCart={handleRemoveFromCart}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
