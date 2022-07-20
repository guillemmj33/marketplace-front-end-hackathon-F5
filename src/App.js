import './App.css';
import { Header, Products, Contact, Footer } from './container';
import { Navbar } from './components';
import React from 'react';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
