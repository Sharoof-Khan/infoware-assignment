import React from 'react'
import Style from  './navbar.module.css'

const Navbar = () => {
  return (
      <div className={Style.container}>
          <div className = {Style.logo}>
              <img src="https://m.dominos.co.in/images/logo_48.png" alt="logo" />
              <p>Domino's Pizza</p>
          </div>
          <div className={Style.cart}>
              <img src="https://i.postimg.cc/q76GQ3mT/cartLogo.png" alt="Cart Logo" />
              <span>0</span>
          </div>
          
    </div>
  )
}

export default Navbar