import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/ProductsPage.scss';
import ProductItem from '../components/ProductItem';
import CartStatus from '../components/CartStatus';

const ProductsPage = () => {
  const products = useSelector((state) => state.products); // Adjust the selector as needed

  return (
    <div className="products-page">
      <h1>Products</h1>
      <CartStatus />
      <ProductItem products={products} />
    </div>
  );
};

export default ProductsPage;
