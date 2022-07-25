import React, { useEffect, useState } from 'react'
import MenuCart from './MenuCart'
// import './products.css'
import Style from './products.module.css'


const Products = () => {

    // const pc = 'https://images.dominos.co.in/new_chicken_sausage.jpg'
    // const category = 'https://m.dominos.co.in/images/non_veg.svg'

    const [data, setData] = useState([])
    
    useEffect(() => {
        // fetch('http://localhost:4000/products')
        fetch('https://infoware-assignment.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    if (data.length === 0) { 
        return <h1>Loading...</h1>
    }

  return (
      <div className={Style.container}>
          {/* <MenuCart
              pic={pc}
              price={500}
              title={'Chicken Sausage'}
              description={'Veg delight - onion, capsicum, grilled mushroom, corn & paneer'}
              size={'Medium'}
              crust="New Hand Tossed"
              category={category}
          /> */}

          {data && data.map(item => {
                return <MenuCart
                    pic={item.image}
                    price={item.price}
                    title={item.title}
                    description={item.description}
                    size={item.size}
                    crust={item.crust}
                    category={item.categories}
                />
            
           })}

          
    </div>
  )
}

export default Products