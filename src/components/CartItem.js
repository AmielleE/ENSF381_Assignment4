import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Price: ${item.price.toFixed(2)}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
        <button onClick={() => onRemove(item.id)} className="cart-item-remove-button">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
