import React, { useState } from 'react';
import './App.css';
import Header from './common/header/Header';
import {BrowserRouter as Router,Route,Link, Routes} from "react-router-dom";
import Pages from './Pages.jsx/Pages';
import Data from '../src/PageBody/Data'
import Cart from './cart/cart';

function App() {
  //Fetsh Data from Database
  const {productItems}=Data

  const [cartItem , setCartItem] = useState([])
  const addToCart = (productItem) =>{
    const selectedItem = productItems.find((item) => item.id === productItem.id)
    if(selectedItem){
      setCartItem([...cartItem, selectedItem])
    }
    console.log(cartItem)
  }


  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' 
        element={<Pages 
          productItems = {productItems}
          addToCart = {addToCart}
          cartItem = {cartItem}
          />} />
        <Route path='/cart' 
        element = {<Cart
        
        />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
