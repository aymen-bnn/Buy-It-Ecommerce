import React, { useState } from 'react'
import Slider from "react-slick";



const SlideCard = ({productItems , addToCart ,cartItem}) => {

  const [count,setCount]=useState(0)
  
  //increment 
  const increment=()=>{
    setCount(count+1)
    console.log(count)}

  var settings = {
        //dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        //autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow:<nextArrow/>,
        prevArrow:<prevArrow/>,
        }    
  return (
    <>
    <div className="Cards">
      <div className='container mx-auto'>
      <Slider {...settings}>
      {
        productItems.map((productItem,index)=>{
          return(
              <div className="Card" key={index}>
                <div className="CardImg">
                  <img src={productItem.cover} alt="" />
                  <div className="CardDef ">
                    <span className = "discount block">{productItem.discount}% OFF</span>
                    <span className = "availabe block">Sold Out</span>
                    <span className = "number">
                      {
                        cartItem.length
                      }
                    </span>
                  </div>
                  <i 
                    class="Favorite fa-regular fa-heart"
                    onClick={increment}
                  ></i>
                </div>
                <div className="CardDetails">
                  <h2>{productItem.name}</h2>
                  <div className="CardRate">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  </div>
                  <div className="price flex justify-between">
                    <h4>{productItem.price}$</h4>
                    <button onClick={()=>addToCart(productItem)}>
                    <i className='addProduct' class="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </div>
            </div>
          )})
        }
        </Slider>
        </div>
      </div>
    </>
  )
}

export default SlideCard