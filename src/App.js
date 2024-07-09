import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import Home from './components/Home';
import UpdateProduct from './components/UpdateProduct';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark style={{ position: 'sticky', top: '0', zIndex: '1000' }}">
          <div className="container-flud d-flex">
            <a className="navbar-brand me-auto" href="/">XXStore</a>

            <div className="navbar-nav d-flex align-items-center">
              <a className="nav-link" href="/">商品頁面</a>
              <a className="nav-link" href="/addProduct">新增商品</a>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/updateProduct/:pid" element={<UpdateProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
