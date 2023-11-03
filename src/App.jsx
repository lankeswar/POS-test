import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Settings from './Pages/Settings/Settings';



function App() {
  return (
    <div className="mainContainer">
      <Header />
      <div className="contentContainer">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          {/* Add your content components here */}
          <Routes>
            {/* Define your routes and corresponding components */}
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
