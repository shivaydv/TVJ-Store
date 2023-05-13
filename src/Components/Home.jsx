import React from 'react'
import "../Styles/Home.css"
import { Link } from 'react-router-dom'


const Home = () => {
  const img ="https://images.unsplash.com/photo-1631896928983-2c94ea6f97e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fGFlc3RoZXRpYyUyMGVsZWN0cm9uaWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60";



  
  return (
   <>
    <div className='home' >
        <img src={img} alt=""/>
        <div className="content">
            <h1>Welcome to TVJ Products</h1>
            <p>The ultimate electronic shop with nerds that are ready to help you set things up.</p>
            <Link to="/products"><button>Shop Now</button></Link>
        </div>
        
    </div>
   
   </>
  )
}

export default Home