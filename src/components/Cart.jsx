import React, { useEffect, useState } from 'react'
import Style from './cart.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/cart/action'
import CartItem from './CartItem'

const Cart = () => {

    // const [totalPrice, setTotalPrice] = useState(0);
    // const [totalItems, setTotalItems] = useState(0);
    // const [qty,setQty] = useState();

    const dispatch = useDispatch();
    
    // const [] = useState()
    
    // const [cart, setCart] = useState([])
    
    const cartItems = useSelector(state => state.dominoProduct.cartItems)
    // console.log('cartItems:', cartItems)
    
    // useEffect(() => {
    //     let items = 0;
    //     let price = 0;

    //     cartItems.forEach(item => {
    //         items += item.quantity;
    //         price += item.quantity * item.price;
    //     }
    //     )
    //     setTotalItems(items)
    //     setTotalPrice(price)
    // },[cartItems,totalPrice,setTotalPrice,totalItems,setTotalItems])



    
    if (cartItems.length === 0) {
        // return <h1>Loading...</h1>
        return (
            <div className={Style.cartContainer}>
                <div className={Style.cart}>
                    <div className={Style.emptyCart}>

                    <img src="https://api.dominos.co.in/prod-olo-api/static/assets/cart_empty.png" alt="Cart Logo" />
                    <p>Your cart is empty</p>
                    </div>
                </div>
            </div>
        )
    }

    const handleRemoveFromCart = (id) => {
        // console.log('id:', id)
        const action = removeFromCart(id)
        dispatch(action)
        
    }






  return (
      <div className={Style.cartContainer} >
          <h1>Cart</h1>
          <div className={Style.cart}>
              {cartItems && cartItems.map(item => {
                  
                return  (<CartItem
                      key={item.id}
                    item={item}
                    handleRemoveFromCart = {handleRemoveFromCart}
                  />
                )
                  
                  
              })
            }
              
              
          </div>
          
    </div>
  )
}

export default Cart