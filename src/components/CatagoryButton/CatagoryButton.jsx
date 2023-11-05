import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './CatagoryButton.module.css'

const CatagoryButton = () => {
	const [selectedButton, setSelectedButton] = useState("") // State to manage the selected button

	const handleButtonClick = (buttonName) => {
		setSelectedButton(buttonName)
	}

	return (
		<div className={styles.buttonGroup}>
			<button
				className={`btn ${
					selectedButton === "Starter" ? "btn-success" : `${styles.btn_inactive}`
				}`}
				onClick={() => handleButtonClick("Starter")}>
				Starter
			</button>
			<button
				className={`btn ${
					selectedButton === "Main Course" ? "btn-success" : `${styles.btn_inactive}`
				}`}
				onClick={() => handleButtonClick("Main Course")}>
				Main Course
			</button>
			<button
				className={`btn ${
					selectedButton === "Drinks" ? "btn-success" : `${styles.btn_inactive}`
				}`}
				onClick={() => handleButtonClick("Drinks")}>
				Drinks
			</button>
			<button
				className={`btn ${
					selectedButton === "Desserts" ? "btn-success" : `${styles.btn_inactive}`
				}`}
				onClick={() => handleButtonClick("Desserts")}>
				Desserts
			</button>
		</div>
	)
}

export default CatagoryButton
