import React from 'react'
import { useDispatch } from 'react-redux'
import { addTocart } from '../redux/cart/action'
import Style from './menuCart.module.css'
const MenuCart = ({ pic, price, title, description, size, crust, category,id,}) => {
     
    const dispatch = useDispatch()
    const handleAddToCart = () => {
      
         const item = {
             id,
             title,
             pic,
             price,
             description,
             size,
             crust,
                
            
         }

        const action = addTocart(item)

        dispatch(action)
        // console.log(action,'addToCart');
         
    }
   

  return (
      <div className={Style.container}>
          <div className={Style.top}>
              <img src={pic} alt={title} />
              <p> ₹ {price}</p>
              <img src={category} alt="category" />          
          </div>

          <div className={Style.mid}>
              <p>{title}</p>
              <p>{ description}</p>
          </div>
          <div className={Style.bottom}>
              <div className={Style.bottomLeft}>
                  <p>Size</p>
                  <p>{ size}</p>
                  <img src="https://i.postimg.cc/htzDkg58/down-arrow.png" alt="down" />
                  {/* <hr /> */}
                  <hr className={Style.hrLeft} />

                  
              </div>
              <div className={Style.bottomRight}>
                  <p>Crust</p>
                  <p>New Hand Tossed</p>
                  <img src="https://i.postimg.cc/htzDkg58/down-arrow.png" alt="down" />
                  <hr className={Style.hrRight} />

                  
              </div>

              {/* <button >ADD TO CART</button> */}
              
          </div>
          <button className={Style.addToCart} onClick = { ()=> handleAddToCart()}>ADD TO CART</button>

          
          
    </div>
  )
}

export default MenuCart