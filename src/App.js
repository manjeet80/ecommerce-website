import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Products from './components/Products';
import Cart from './components/Cart';

import CardContextProvider from './Global/CardContext';
import NotFound from './components/NotFound';
function App() {
  return (
    <div className="App">
      
        <CardContextProvider>
        <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Products/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </Router>
        </CardContextProvider>
     
    </div>
  );
}

export default App;
