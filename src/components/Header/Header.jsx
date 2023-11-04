// import React from "react"
import styles from "./Header.module.css"
import  { useState, useEffect } from "react"
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Header() {
	// Function to format the current date
	const formatDateTime = () => {
		const options = {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
		}
		const today = new Date()
		return today.toLocaleDateString("en-US", options)
	}

	const [currentDateTime, setCurrentDateTime] = useState(formatDateTime())

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentDateTime(formatDateTime())
		}, 60000) // Update every minute (60000 milliseconds)

		return () => clearInterval(interval) // Cleanup the interval on unmount
	}, [])

	formatDateTime

	const restaurantNameStyle = {
		fontSize: "30px",
		fontWeight: "bold",
		fontFamily: "Varela Round, sans-serif", // Change the font family
		// color: "#e74c3c", // Example secondary color
	}

	const getColor = (index) => {
		// Define your colors here
		const colors = ["blue", "orange", "green"] // Add more colors if needed

		return colors[index % colors.length]
	}

	const coloredLetters = Array.from("POS").map((letter, index) => (
		<span key={index} style={{ color: getColor(index) }}>
			{letter}
		</span>
	))

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
		<header className={styles.header}>
			<div style={restaurantNameStyle}>{coloredLetters}</div>

			<div className={styles.searchBox}>
				<i className="fas fa-search" style={searchIconStyle}></i>{" "}
				{/* Use 'fas' for solid style */}
				<input type="text" placeholder="Search Products or any order..." />
			</div>
			<div className={styles.dateTime} style={dateTimeStyle}>
				<TodayOutlinedIcon/>
				<span>{currentDateTime}</span>
			</div>
		</header>
	)
}

export default Header
