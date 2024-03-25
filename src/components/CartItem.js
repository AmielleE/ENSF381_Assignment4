import React from 'react';

const CartItem = ({ item, onDecreaseQuantity, onRemoveFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Price: ${item.price.toFixed(2)}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
        {item.quantity > 1 && (
          <button onClick={() => onDecreaseQuantity(item.id)} className="cart-item-quantity-decrease">
            -
          </button>
        )}
        <button onClick={() => onRemoveFromCart(item.id)} className="cart-item-remove-button">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
