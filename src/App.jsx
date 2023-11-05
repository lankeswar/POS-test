// import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import OrderView from './components/OrederView/OrderView';

import { Routes, Route } from 'react-router-dom';

import styles from './App.module.css'
import './AppGlobal.css'

import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Settings from './Pages/Settings/Settings';



function App() {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={styles.contentContainer}>
        <div className={styles.navbar}>
          <Navbar />
        </div>
        <div className={styles.content}>
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
        <div className={styles.orderView}>
          <OrderView />
        </div>
        
      </div>
    </div>
  );
}

export default App;
