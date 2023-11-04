import styles from "./UnderConstruction.module.css"
import ConstructionIcon from "@mui/icons-material/Construction"
const UnderConstruction = () => {
	return (
		<>
			<div className={styles.text}>
				<ConstructionIcon />
				<h3>Under Construction</h3>
                <ConstructionIcon />
			</div>
			<img src="images/construction.png" className={styles.images}></img>
		</>
	)
}

export default UnderConstruction
