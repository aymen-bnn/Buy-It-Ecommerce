import React from 'react'
import SlidesData from './SlidesData'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const Slides = () => {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
    }
  return (
    <>
      <div className="slides w-full shadow-xl">
        <Slider {...settings}>
          {
            SlidesData.map((path,index)=>{
              return(
                <>
                    <div className="slide" key={index}>
                      <div className="slideText">
                        <h1>{path.title}</h1>
                        <p>{path.desc}</p>
                        <button>Shop Now</button>
                      </div>
                      <div className="slideImg">
                        <img src={path.cover} alt="" />
                      </div>
                    </div>
                </>
              )})
            }
        </Slider>
      </div>
    </>    
)
}

export default Slides