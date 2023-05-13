import React from 'react'

import "../Styles/ProductCard.css"
import { Link } from 'react-router-dom'

const ProductCard = ({name,price,image,url}) => {


  return (
    <div className='card'>
        <img src={image} alt="" />
        <div className="info">
        <h2>{name}<span>  -  {price}</span></h2>
        <Link to={url}>Buy Now</Link>
        
        </div>
        
    </div>
  )
}

export default ProductCard