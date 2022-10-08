import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [MobileMenu,setMobileMenu]=useState(false)
  let elements=[
    ['Home', '/dashboard'],
    ['Pages', '/pages'],
    ['User account', '/user'],
    ['Vendor account', '/vendor'],
    ['Track order', '/contactrack'],
    ['Contact', '/contact'],
  ]
  return (
      <header>
        <div className="container mx-auto">
        <nav className="nav-items flex space-x-4">
          <ul className={
            MobileMenu?"nav-block":"flex nav-elements "
          }>
              {
                elements.map(([title, url]) => (
                  <li className="nav-list flex justify-center items-center rounded-lg px-3 py-2 font-medium">
                    < Link className='nav-link' to={url} >{title}</Link>
                  </li>
              ))}
            </ul>
            <button className='toggle' onClick={()=>setMobileMenu(!MobileMenu)}>
              {
                MobileMenu?<ion-icon name="close-outline"></ion-icon>:<ion-icon name="reorder-four-outline"></ion-icon>
              }
            </button>
          </nav>
        </div>
      </header>
  )
}

export default Navbar