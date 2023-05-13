import React from 'react'
import "../Styles/Header.css"
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    
    <nav>
    <div className="left">
        TVJ Products
    </div>
    <div className="right">
        <NavLink to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/products" activeClassName="active">Products</NavLink>
    </div>
    </nav>
    
  )
}

export default Header