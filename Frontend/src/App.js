import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/Home';
import ProductsHome from './screens/ProductsHome';
import Products from './screens/Products';
import Donation from './screens/Donation';
import Login from './screens/Login';
import Register from './screens/RegisterPage';
import About from './screens/About';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import EmployeeDashboard from './screens/EmployeeDashboard';


const App = () => {
  return (
    <div className='main'>
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/donation" element={<Donation />} />
      <Route path="/productshome" element={<ProductsHome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/employeedashboard" element={<EmployeeDashboard/>} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
};

export default App;
