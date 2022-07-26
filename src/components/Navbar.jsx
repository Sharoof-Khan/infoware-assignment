import React, { useEffect, useState } from 'react'
import Style from './navbar.module.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const Navbar = () => {

    const cartItems = useSelector(state => state.dominoProduct.cartItems)
    console.log('cartItemsCountInNavbar:', cartItems.length)
    const [cartCount, setCartCount] = useState(0)
    
    useEffect(() => {
        let count = 0;
        cartItems.forEach(item => {
            count += item.quantity;
        });
        setCartCount(count);
    },[cartCount,cartItems])



    const navigate = useNavigate()

    const handleNavigate = () => { 
        // console.log('clicked');
        // alert('clicked');
        navigate('/cart')
    }
    const handleNavigateToHome = () => {
        navigate('/')
    }
  return (
      <div className={Style.container}>
          <div className = {Style.logo} onClick ={handleNavigateToHome}>
              <img src="https://m.dominos.co.in/images/logo_48.png" alt="logo" />
              <p>Domino's Pizza</p>
          </div>
          <div className={Style.cart}  >
              {/* <Link to="/cart"> */}
                  <img onClick={handleNavigate} className={Style.cartImg} src="https://i.postimg.cc/q76GQ3mT/cartLogo.png" alt="Cart Logo" />
                  {/* </Link> */}
              <span>{ cartCount}</span>
          </div>
          
    </div>
  )
}

export default Navbar