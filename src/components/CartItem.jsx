import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Style from './cart.module.css'
import {changeQuantity} from "../redux/cart/action"

const CartItem = ({ item,handleRemoveFromCart }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [addQty, setAddQty] = useState(item.quantity);
    // const [subQty, setSubQty] = useState(item.quantity);
    
    const dispatch = useDispatch();
     const cartItems = useSelector(state => state.dominoProduct.cartItems)
    // console.log('cartItems:', cartItems)

     useEffect(() => {
        let items = 0;
        let price = 0;

        cartItems.forEach(item => {
            items += item.quantity;
            price += item.quantity * item.price;
        }
        )
        setTotalItems(items)
        setTotalPrice(price)
    },[cartItems,totalPrice,setTotalPrice,totalItems,setTotalItems])

const handleAddQty = () => {
    // setQty(e.target.value)
    // console.log('addQtyBefore Add:', addQty);
    setAddQty(addQty + 1)
    // console.log('addQtyAfter Add:', addQty);
    
    
    
    }

    const handleRemoveQty = () => {
        // console.log('subQty Before Sub:', addQty);
        setAddQty(addQty - 1)
        // console.log('subQty After SUb:', addQty);
    
    
    }
     

    useEffect(() => {
        dispatch(changeQuantity(item.id, addQty))
    },[addQty,setAddQty,dispatch,item.id])


  return (
      <div>
          <div className={Style.cartItem} >
                      <div className={Style.cartItemImg}>
                          <img src={item.image} alt="Cart Item" />
                          <div className={Style.qty}>

                              {item.quantity > 1 ? <img onClick={() => handleRemoveQty()} src="https://m.dominos.co.in/images/minus.svg" alt="Sub" /> :<img onClick={() =>handleRemoveFromCart(item.id)} src="https://m.dominos.co.in/images/delete_icon.svg" alt="Delete" /> }
                              <p>{ item.quantity}</p>
                              <img onClick={() => handleAddQty()} src="https://m.dominos.co.in/images/plus.svg" alt="Add" />
                      </div>
                      </div>
                      <div className={Style.cartItemInfo}>
                          <p>{item.title}</p>
                          <p>{item.description}</p>
                          <p><span>{item.size} | { item.crust}</span></p>
                          <p> ₹ {item.price}</p>
                      </div>

                  </div>
                      
                      <div className={Style.subTotal}>
                          <p>Subtotal (Items:{ totalItems})</p>
                          <p>₹ {totalPrice}</p>
                          <button>Checkout</button>
                      </div>
                      
          
    </div>
  )
}

export default CartItem