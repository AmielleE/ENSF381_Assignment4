import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      {/* Product Image */}
      <img src={item.image} alt={item.name} className="cart-item-image" />

      {/* Product Details */}
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Price: ${item.price.toFixed(2)}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
      </div>

      {/* Remove Button */}
      <button onClick={() => onRemove(item.id)} className="cart-item-remove-button">
        Remove
      </button>

      {/* Cart Total - This would likely be handled at the Cart component level instead */}
      {/* <p className="cart-total">Total (in cart): ${item.total.toFixed(2)}</p> */}
    </div>
  );
};

export default CartItem;
