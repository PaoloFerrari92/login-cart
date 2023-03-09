import React, {createContext, useContext, useReducer, useState, useEffect} from 'react';
import axios from 'axios';
import { cartReducer } from './Reducers';

const Cart = createContext();

const CartContext = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
            setProducts(res.data);
        }).catch(err => console.log(err))
    }, [])

        console.log(products);

  
    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
      });    

  return (
    <Cart.Provider value={{state, dispatch}}>
        {children}
    </Cart.Provider>
  )
}

export default CartContext

export const CartState = () => {
    return useContext(Cart);
  };