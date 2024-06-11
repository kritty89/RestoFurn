import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/Home';
import Products from './screens/Products';
import Donation from './screens/Donation';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/donation" element={<Donation />} />
      <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
