import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.navItem}>
        <i className="fas fa-home"></i>
        <span>Home</span>
      </Link>
      <Link to="/menu" className={styles.navItem}>
        <i className="fas fa-utensils"></i>
        <span>Menu</span>
      </Link>
      <Link to="/payment" className={styles.navItem}>
        <i className="fas fa-credit-card"></i>
        <span>Payment</span>
      </Link>
      <Link to="/orders" className={styles.navItem}>
        <i className="fas fa-list-alt"></i>
        <span>Orders</span>
      </Link>
      <Link to="/settings" className={styles.navItem}>
        <i className="fas fa-cogs"></i>
        <span>Settings</span>
      </Link>
    </div>
  );
}

export default Navbar;
