// import React from "react"
import styles from "./Header.module.css"

function Header() {
	// Function to format the current date
	const formatDate = () => {
		const options = {
			year: "numeric",
			month: "long",
			day: "numeric",
		}
		const today = new Date()
		return today.toLocaleDateString("en-US", options)
	}

	const headerStyle = {
		backgroundColor: "#3498db", // Example primary color
	}

	const restaurantNameStyle = {
		fontSize: "30px",
		fontWeight: "bold",
    fontFamily: 'Arial, sans-serif', // Change the font family
		// color: "#e74c3c", // Example secondary color
	}


  const getColor = (index) => {
    // Define your colors here
    const colors = ['blue', 'orange', 'green']; // Add more colors if needed
  
    return colors[index % colors.length];
  };
  
  const coloredLetters = Array.from('POS').map((letter, index) => (
    <span key={index} style={{ color: getColor(index) }}>{letter}</span>
  ));

	const searchIconStyle = {
		fontSize: "18px", // Decrease the icon size
		color: "gray", // Gray color
		marginRight: "10px", // Add space between the icon and input
	}

	const dateTimeStyle = {
		fontSize: "14px",
		fontStyle: "italic",
	}

	return (
		<header className={styles.header} style={headerStyle}>
			<div style={restaurantNameStyle}>{coloredLetters}</div>
			

			<div className={styles.searchBox}>
				<i className="fas fa-search" style={searchIconStyle}></i>{" "}
				{/* Use 'fas' for solid style */}
				<input
					type="text"
					placeholder="Search for items..."
				/>
			</div>
			<div className={styles.dateTime} style={dateTimeStyle}>
				Today: {formatDate()}
			</div>
		</header>
	)
}

export default Header
