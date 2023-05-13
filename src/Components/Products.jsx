import React from 'react';
import "../Styles/Products.css";
import ProductCard from './ProductCard';
import data from "../Data/data.json"


const Products = () => {
  return (
    <div className='ProductSection'>
      <h1>Products</h1>
      <div>
        {data.map(item => (
          <ProductCard name={item.name} price={item.price} image={item.image} url={item.url}/>
        ))}
      </div>
      
    </div>
  )
}

export default Products


