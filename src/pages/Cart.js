import React, { useState, useEffect } from 'react'
import { CartState } from '../context/CartContext'
import { AiFillDelete } from "react-icons/ai";
import { Form } from "react-bootstrap";


const Cart = () => {
    const {
        state: { cart },
        dispatch,
        
    } = CartState();

    const [ total, setTotal ] = useState();
    
    useEffect( () => {
        setTotal(
            cart.reduce( ( acc, curr ) => acc + Number( curr.price ) * curr.qty, 0 )
        );
    }, [ cart ] )



    return (
        <div>
            { cart.map( ( product ) => (
                <div className="cartItemDetail">
                    <img
                        src={ product.image }
                        className="cartItemImg"
                        alt={ product.name }
                    />
                    <span className='title'>{ product.title } </span>
                    <span> { product.price } €</span>
                    <div> 
                       <Form.Control
                    as="select"
                    value={product.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: product.id,
                          qty: e.target.value,
                        },
                      })
                    }
                        >
                    {[...Array(5).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                    </div>
                    
                    <AiFillDelete
                        fontSize="20px"
                        style={ { cursor: "pointer" } }
                        onClick={ () =>
                            dispatch( {
                                type: "REMOVE_FROM_CART",
                                payload: product,
                            } )
                        }
                    />
                </div>
            ) ) }
            <div className="filters summary">
                <span className="title">Subtotal ({ cart.length }) items</span>
                <span style={ { fontWeight: 700, fontSize: 20 } }>Total:  { total }€</span>
                <button type="button" disabled={ cart.length === 0 }>
                    Proceed to Checkout
                </button>
            </div>
        </div>
    )
}

export default Cart
