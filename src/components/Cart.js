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
    <div className="cart">
      <h2>Your Shopping Cart</h2>
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
          <div className="cart-total">
            <strong>Total: </strong>${calculateTotal(cartItems)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
