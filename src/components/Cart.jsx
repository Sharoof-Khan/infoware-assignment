import React, { useState } from 'react'
import Style from './cart.module.css'

const Cart = () => {

    const [cart, setCart] = useState([])
    
    if (cart.length === 0) {
        // return <h1>Loading...</h1>
        return (
            <div className={Style.container}>
                <div className={Style.cart}>
                    <div className={Style.emptyCart}>

                    <img src="https://api.dominos.co.in/prod-olo-api/static/assets/cart_empty.png" alt="Cart Logo" />
                    <p>Your cart is empty</p>
                    </div>
                </div>
            </div>
        )
    }
  return (
      <div className={Style.container} >
          <h1>Cart</h1>
          <div className={Style.cart}>
              
              
          </div>
          
    </div>
  )
}

export default Cart