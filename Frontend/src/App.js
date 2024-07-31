import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
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
import ProductDetail from './screens/ProductDetail';
import Confirmation from './screens/Confirmation';
import Payment from './screens/Payment';


const App = () => {

  return (
    <div className='main'>
      <CartProvider>
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
      <Route path="/productdetail/:id" element={<ProductDetail />} />
      <Route path="/employeedashboard" element={<EmployeeDashboard/>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </Router>
    </CartProvider>
    </div>
  );
};

export default App;
