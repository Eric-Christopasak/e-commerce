import React from 'react'
import Navbar from './navbar/Navbar'
import Home from './home/Home'
import Product from './product/Product'
import Footer from './footer/Footer'
import './App.css'


const App = () => {
  return (
    <div className='Container-fluid'>
      <div className=''>
        <Navbar />
      </div>
      <div className=''>
        <Home />
      </div>
      {/* <div className=''>
        <Product />
      </div> */}
      <Footer />
    </div>

  )
}

export default App
