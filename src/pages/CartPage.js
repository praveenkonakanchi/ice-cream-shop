// /src/pages/CartPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart); // Adjust the selector as needed

  if (cartItems.length === 0) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
