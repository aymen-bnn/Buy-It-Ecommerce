import React from 'react'
import Home from '../PageBody/Home'
import SlideCard from '../PageBody/SlideCard'


const Pages = ({productItems,addToCart,cartItem}) => {
  return (
    <>
        <Home/>
        <SlideCard 
          productItems={productItems}
          addToCart={addToCart}
          cartItem = {cartItem}
        />
    </>
  )
}

export default Pages