import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/CartStatus.scss';

const CartStatus = () => {
  const cartItems = useSelector((state) => state.cart);
  const itemCount = cartItems.length;

  return (
    <div className="cart-status">
      <p>Items in Cart: {itemCount}</p>
      <Link to="/cart">
        <button>View Cart</button>
      </Link>
    </div>
  );
};

export default CartStatus;
