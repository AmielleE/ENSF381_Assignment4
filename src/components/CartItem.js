import React from 'react';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const handleRemoveClick = () => {
    onRemoveFromCart(item.id);
  };

  const handleUpdateCartQty = (lineItemId, newQuantity) => {
    onUpdateCartQty(lineItemId, newQuantity);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h4 className="cart-item-name">{item.name}</h4>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
        <div className="cart-item-quantity">
          <button onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</button>
        </div>
        <button className="cart-item-remove-button" onClick={handleRemoveClick}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
