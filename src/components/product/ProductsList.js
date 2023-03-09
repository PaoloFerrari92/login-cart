import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { CartState } from '../../context/CartContext';
import './product.css';

const ProductsList = () => {
    const {
        state: { cart },
        dispatch,
      } = CartState();
    

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
            setProducts(res.data);
        }).catch(err => console.log(err))
    }, [])

        console.log(products);

  return (
    <div className='product-list'>
        {products.map ((product) => (
        <div key={product.id} className="product">
            <div>
                 <img src={product.image} />
            </div>
            <div>
                <h4 className='product_title'>{product.title}</h4>
            </div>
                <div>
                    <h6>{product.price} €</h6>
                    <p>{product.rating.rate}</p>    
                </div>
                <div>
                    {cart.some((p) => p.id === product.id) ? (
                    <button 
                    onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: product,
                        })
                      }
                    >
                      Remove from Cart
                    </button>
                   ) : (
                    <button 
                    onClick={() =>
                        dispatch({
                        type: "ADD_TO_CART",
                        payload: product,
                        })
                         }  
                    >
                          Add to Cart              
                    </button>
                   )}

                    
                </div>
        </div>
            
            
        ))}
    </div>
  )
}

export default ProductsList