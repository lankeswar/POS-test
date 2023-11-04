import styles from "./Home.module.css"
import FoodCard from "../../components/FoodCard/FoodCard"

export default function Home() {
	return (
		<>
			<h1 className={styles.head}>Home</h1>
			<FoodCard image="/images/f2.jpeg" name="pizza" category="italian" />
		</>
	)
}
