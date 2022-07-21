import './App.css';
import Products from './container/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Footer from './container/Footer/Footer'
import React from 'react';
import ShoppingCart from './components/Cart/ShoppingCart';
import CartPage from './page/CartPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import AddPage from './page/AddPage';


const App = () => {
  return (
    
    <BrowserRouter>
    <div>
    <Navbar />
    <Products />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/add' element={<AddPage/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/shoppingcart' element={<ShoppingCart />} />
      </Routes>
    <Footer />
    </div>
    
    </BrowserRouter>
    
    
  );
}

export default App;
