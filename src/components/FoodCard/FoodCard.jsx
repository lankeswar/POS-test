import styles from "./FoodCard.module.css"
import PropTypes from "prop-types"

const FoodCard = ({ image, name, category }) => {
	FoodCard.propTypes = {
		image: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		category: PropTypes.string.isRequired,
	}

	return (
		<div className={styles.food_card}>
			<div className={styles.food_card__image_wrapper}>
				<img src={image} alt={name} />
			</div>
			<div className={styles.food_card__text_wrapper}>
				<h2 className={styles.food_card__name}>{name}</h2>
				<p className={styles.food_card__category}>{category}</p>
			</div>
		</div>
	)
}

export default FoodCard
