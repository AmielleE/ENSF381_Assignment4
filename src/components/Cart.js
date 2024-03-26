/*
=================================================================================================================
Name: Cart.js
Assignment: 4
Author(s): Amielle El Makhzoumi, Diba Jamali
Submission: March 25th, 2024
=================================================================================================================
*/
import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, onUpdateCartQty, onRemoveFromCart }) => {

  const handleRemoveOneItem = (productId) => {
    const item = cartItems.find(item => item.id === productId);

    if (item.quantity > 1) {
      onUpdateCartQty(productId, item.quantity - 1);
    } else {
      onRemoveFromCart(productId);
    }
  };

  const calculateTotal = (items) => {
    return items.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2);
  };

  return (
    <div className="cart" style={{ width: '30%', padding: '1rem', marginLeft: 'auto', position: 'absolute', 
          right: '0', top: '6rem' }}>
      <h2 className="cart-heading" style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'left' }}>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="cart-empty-message">Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={handleRemoveOneItem} 
            />
          ))}
          <div className="cart-total" style={{ fontWeight: 'bold', marginTop: '1rem', textAlign: 'left' }}>
            <strong>Total: </strong>${calculateTotal(cartItems)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;