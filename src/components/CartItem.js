/*
=================================================================================================================
Name: CartItem.js
Assignment: 4
Author(s): Amielle El Makhzoumi, Diba Jamali
Submission: March 25th, 2024
=================================================================================================================
*/
import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', 
          justifyContent: 'flex-start', marginBottom: '1rem', backgroundColor: 'transparent', padding: '1rem' }}>
      <img src={item.image} alt={item.name} className="cart-item-image" style={{ width: '85%', marginBottom: '1rem' }} />
      <div className="cart-item-details" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', 
            padding: '0.5rem 0' }}>
        <h3 className="cart-item-name" style={{ marginBottom: '0.25rem' }}>{item.name}</h3>
        <p className="cart-item-price" style={{ marginBottom: '0.25rem' }}>Price: ${item.price.toFixed(2)}</p> 
        <p className="cart-item-quantity" style={{ marginBottom: '0.25rem' }}>Quantity: {item.quantity}</p> 
        <p className="cart-item-total" style={{ marginBottom: '0.25rem' }}>Total: ${(item.quantity * item.price).toFixed(2)}</p>
        <button onClick={() => onRemove(item.id)} className="cart-item-remove-button" style={{ border: '1px solid black', 
            backgroundColor: 'transparent', padding: '0.5rem 1rem', color: 'black', marginTop: '1rem', cursor: 'pointer', 
            width: 'fit-content' }}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;