import React from 'react';
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';
import SuperCoin from './Components/SuperCoin';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>E-Commerce Application</h1>
      <div className="main-content">
        <ProductList />
        <div>
          <ShoppingCart />
          <SuperCoin />    {/* 👈 ADD THIS LINE */}
        </div>
      </div>
    </div>
  );
}

export default App;