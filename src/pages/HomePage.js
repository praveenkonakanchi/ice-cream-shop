import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.scss';

const HomePage = () => {
  console.log('here coming homepage');
  return (
    <div className="homepage">
      <header className="header">
        <h1>Welcome to the Ice Cream Shop</h1>
        <Link to="/products" className="shop-link">
          Shop Now
        </Link>
      </header>
      <section className="featured-products">{/* Display a few featured products */}</section>
    </div>
  );
};

export default HomePage;
