import './App.css';
//import { Header, Products, Contact, Footer } from './container';
import { Navbar } from './components';
import HomePage from "./pages/HomePage";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CrearPage from './pages/CrearPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/crear' element={<CrearPage/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
