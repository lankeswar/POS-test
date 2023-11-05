import styles from "./OrderView.module.css"
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined"
import 'bootstrap/dist/css/bootstrap.min.css';

function OrderView() {
	return (
		<div className={styles.order_view}>
			<h2>ORDER #</h2>

			<h2 className={styles.guesth2}>
				<PeopleOutlineOutlinedIcon /> Guest:{" "}
				<span style={{ color: "red" }}>3</span>
			</h2>

			<hr style={{ border: "1px solid grey", width: "100%" }} />

			<div className="current_orderList">
				Noodles <br /> Momo
			</div>
			<hr style={{ border: "1px solid grey", width: "100%" }} />

			<div className={styles.billing}>
				<div className="order_total">
					Subtotal <br /> Service Charge 10%
				</div>
				<hr style={{ border: "1px solid grey", width: "100%" }} />
				<h1>Total</h1>
				<button className="btn btn-danger">Cancel Order</button>
			</div>
		</div>
	)
}

export default OrderView
