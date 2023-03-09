import React from 'react';
import { CartState } from '../context/CartContext';
import ProductsList from '../components/product/ProductsList';

const Home = () => {
  const {
    state: {products}} = CartState()

    console.log(products);


  return (
    <div>
      <ProductsList />
    </div>
  )
}

export default Home