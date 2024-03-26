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
    <div className="cart-item"> 
        <img src={item.image} alt={item.name} style={{marginTop: '10px', width: '250px', height: '250px' }} />
        <div>
            <p>{item.name}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
            <button onClick={() => onRemove(item.id)}>Remove</button>
        </div>
    </div>
  );
};

export default CartItem;