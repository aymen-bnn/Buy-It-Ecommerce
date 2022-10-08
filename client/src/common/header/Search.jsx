import React from 'react'

const Search = () => {
  return (
    <section className='search'>
      <div className="container flex mx-auto justify-between items-center ">
        <div className="logo">
          <h1>Buy<span>.it</span></h1>
        </div>
        <div className="search-box flex ">
          <input className='search-bar' type="text" placeholder='Search Here ...' />
          <button className='search-button'><ion-icon name="search-outline"></ion-icon></button>
        </div>
        <div className="notifications flex ">
          <div className="notification ">
            <ion-icon name="heart-outline"></ion-icon>
            <span>Wish List</span>
          </div>
          <div className="notification">
            <ion-icon name="people-outline"></ion-icon>
            <span>Sign in</span>
          </div>
          <div className="notification">
            <ion-icon name="cart-outline"></ion-icon>
            <span>Cart</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Search