import { Link } from 'react-router-dom';
import styles from './OrderView.module.css';

function OrderView() {
  return (
    <div className={styles.order_view}>
      <h1>ORDER #</h1>
      <h2>Guest:</h2>
      <hr></hr>

      <Link to="/" className={styles.orderItem}>
        <i className="fas fa-home"></i>
        <span>Home</span>
      </Link>
      <Link to="/menu" className={styles.orderItem}>
        <i className="fas fa-utensils"></i>
        <span>Menu</span>
      </Link>
      <Link to="/payment" className={styles.orderItem}>
        <i className="fas fa-credit-card"></i>
        <span>Payment</span>
      </Link>
      <Link to="/orders" className={styles.orderItem}>
        <i className="fas fa-list-alt"></i>
        <span>Orders</span>
      </Link>
      <Link to="/settings" className={styles.orderItem}>
        <i className="fas fa-cogs"></i>
        <span>Settings</span>
      </Link>
    </div>
  );
}

export default OrderView;
