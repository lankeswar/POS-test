import { useState, useEffect } from "react"
import FoodCard from "../FoodCard/FoodCard"
import styles from "./FoodList.module.css"

const FoodList = () => {
	const [foodCards, setFoodCards] = useState([])

	const fetchFoodCards = async () => {
		// const response = await fetch("https://api.example.com/food-cards");
		// const data = await response.json();

		//setFoodCards([...foodCards, ...data]);

		setFoodCards([
			{
				id: 1,
				name: "Pizza",
				category: "Italian food",
				image: "/images/f1.jpeg",
				price: 10.99,
			},
			{
				id: 2,
				name: "Hamburger",
				category: "American food",
				image: "/images/f2.jpeg",
				price: 8.99,
			},
			{
				id: 3,
				name: "Sushi",
				category: "Japanese food",
				image: "/images/f3.jpeg",
				price: 12.99,
			},
			{
				id: 4,
				name: "Salad",
				category: "Healthy food",
				image: "/images/f4.jpeg",
				price: 7.99,
			},
		])
	}

	const renderFoodCards = () => {
		return foodCards.map((foodCard, index) => (
			<FoodCard
				key={index}
				image={foodCard.image}
				name={foodCard.name}
				category={foodCard.category}
			/>
		))
	}

	useEffect(() => {
		fetchFoodCards()
	}, [])

	const intersectionObserver = new IntersectionObserver((entries) => {
		if (entries[0].isIntersecting) {
			fetchFoodCards()
		}
	})

	useEffect(() => {
		const containerEl = document.querySelector(`.${styles.food_container}`)

		intersectionObserver.observe(containerEl)

		return () => {
			intersectionObserver.unobserve(containerEl)
		}
	},)

	return (
		<div className={styles.food_container}>
			<div className={styles.food_list}>{renderFoodCards()}</div>
		</div>
	)
}

export default FoodList
