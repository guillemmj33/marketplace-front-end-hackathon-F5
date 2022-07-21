import './App.css';
import Products from './container/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Footer from './container/Footer/Footer'
import React from 'react';
import ShoppingCart from './components/Cart/ShoppingCart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    
    <BrowserRouter>
    <div>
    <Navbar />
    <Products />
   
      <Routes>
        <Route path='/shoppingcart' element={<ShoppingCart />} />
      </Routes>
    <Footer />
    </div>
    
    </BrowserRouter>
    
    
  );
}

export default App;
