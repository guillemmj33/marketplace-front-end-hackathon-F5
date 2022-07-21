import './App.css';
import { Header, Products, Contact} from './container';
import { Navbar } from './components';
import React from 'react';
import ShoppingCart from './components/Cart/ShoppingCart';
import Cart from './components/Cart/Cart';


const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shoppingCart' element={<ShoppingCart />} />
        <Route path='/cart' element={<Cart />} />
      <Navbar />
      <Header />
      <Products />
      <Contact />
    
      {/* <Footer /> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
