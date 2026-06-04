import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeItemFromCart,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from './CartSlice';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemoveItem = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseItemQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseItemQuantity(itemId));
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <span>
                  {item.name} - ${item.price}
                </span>
                <div className="quantity-controls">
                  <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                </div>
                <button
                  className="remove-item-btn"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <strong>Total Amount: ${totalAmount}</strong>
          </div>
          <button className="clear-cart-btn" onClick={handleClearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;