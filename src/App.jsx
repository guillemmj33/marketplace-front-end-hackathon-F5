import './App.css';
import { Header, Products, Contact} from './container';
import { Navbar } from './components';
import React from 'react';
import ShoppingCart from './components/Cart/ShoppingCart';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    
    <BrowserRouter>
    <Navbar />
    <div>
   
      <Routes>
        {/* <Route path='/' element={<HomePage />} /> */}
        <Route path='/shoppingcart' element={<ShoppingCart />} />
        
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
