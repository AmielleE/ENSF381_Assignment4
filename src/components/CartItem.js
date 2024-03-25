import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <h3>Product {item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
      <button onClick={() => onRemove(item.id)} className="remove-button">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
