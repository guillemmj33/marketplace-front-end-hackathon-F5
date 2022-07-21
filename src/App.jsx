import './App.css';
//import { Header, Products, Contact, } from './container';
//import { Navbar } from './components/Navbar/Navbar';

import React from 'react';
import ShoppingCart from './components/Cart/ShoppingCart';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    
    <BrowserRouter>
   
    {/* <Header />
    <Navbar />
    <Products />
    <Contact /> */}
    {/* <Footer /> */}
    <div>
   
      <Routes>
        <Route path='/shoppingcart' element={<ShoppingCart />} />
        
      </Routes>
    </div>
    
    </BrowserRouter>
    
    
  );
}

export default App;
