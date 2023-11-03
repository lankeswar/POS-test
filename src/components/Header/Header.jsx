import React from 'react';
import styles from './Header.module.css';

function Header() {
  // Function to format the current date
  const formatDate = () => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const today = new Date();
    return today.toLocaleDateString('en-US', options);
  };

  const headerStyle = {
    backgroundColor: '#3498db', // Example primary color
  };

  const restaurantNameStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#e74c3c', // Example secondary color
  };

  const searchInputStyle = {
    width: '450px', // Decrease the width
    padding: '10px',
    borderRadius: '20px', // Rounded edges
    border: 'none',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    fontSize: '16px',
    color: '#333', // Example text color
  };

  const searchIconStyle = {
    fontSize: '18px', // Decrease the icon size
    color: 'gray', // Gray color
    marginRight: '10px', // Add space between the icon and input
  };

  const dateTimeStyle = {
    fontSize: '14px',
    fontStyle: 'italic',
  };

  return (
    <header className={styles.header} style={headerStyle}>
      <div style={restaurantNameStyle}>My Restaurant</div>
      <div className={styles.searchBox}>
        <i className="fas fa-search" style={searchIconStyle}></i> {/* Use 'fas' for solid style */}
        <input
          type="text"
          placeholder="Search for items..."
          style={searchInputStyle}
        />
      </div>
      <div className={styles.dateTime} style={dateTimeStyle}>
        Today: {formatDate()}
      </div>
    </header>
  );
}

export default Header;
