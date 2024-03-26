/*
=================================================================================================================
Name: CartItem.js
Assignment: 4
Author(s): Amielle El Makhzoumi, Diba Jamali
Submission: March 25th, 2024
=================================================================================================================
*/
import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
    const total = item.quantity * item.price; 
    const removeItem = () => {
        if (item.quantity === 1) {
            removeFromCart(item);
        } else {
            removeFromCart({ ...item, quantity: item.quantity - 1 });
        }
    };

    return (
        <div className="cart-item"> 
            <img src={item.image} alt={item.name} style={{marginTop: '10px', width: '250px', height: '250px' }} />
            <div>
                <p>{item.name}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${total}</p>
                <button onClick={removeItem}>Remove</button>
            </div>
        </div>
    );
};

export default CartItem;