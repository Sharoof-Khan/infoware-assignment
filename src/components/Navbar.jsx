import React from 'react'
import Style from './navbar.module.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Navbar = () => {

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
              <span>0</span>
          </div>
          
    </div>
  )
}

export default Navbar