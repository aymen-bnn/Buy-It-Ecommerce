import React from 'react'
import Categories from './Categories'
import "./Home.css" 
import Slides from './Slides'
const Home = () => {
  return (
    <section>
        <div className="Home container flex mx-auto">
            <Categories/>
            <Slides/>
        </div>
    </section>
  )
}

export default Home