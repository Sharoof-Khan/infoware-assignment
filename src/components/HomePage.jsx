import React from 'react'
import Cart from './Cart'
import Navbar from './Navbar'
import Products from './Products'
import Style from './homePage.module.css'

const HomePage = () => {
  return (
      <div className={Style.homePage}>
          {/* <Navbar /> */}
          <Products />

          <Cart  />
    </div>
  )
}

export default HomePage