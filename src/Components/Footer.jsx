import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "../Styles/Footer.css"
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-left">
        <h1>TVJ Products</h1>
        <p>&#169; All Copywrite Reserved </p>
    </div>
    <div className="footer-right">
        <Link to={""}><FaInstagram  /></Link>
        <Link to={""}><FaFacebook  /></Link>
        <Link to={""}><FaYoutube  /></Link>
        <Link to={""}> <FaTwitter  /></Link>
        
        
       
    </div>
    </div>
  )
}

export default Footer