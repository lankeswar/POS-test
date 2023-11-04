import styles from "./OrderView.module.css"

function OrderView() {
	return (
		<div className={styles.order_view}>
			<h1>ORDER #</h1>
			<h2>Guest:</h2>
			<hr style={{ border: "1px solid grey", width: "100%" }} />

			<div className="current_orderList">
				Chowmin <br /> Momo
			</div>
			<hr style={{ border: "1px solid grey", width: "100%" }} />

			<div className="billing">
				<div className="order_total">
					Subtotal <br /> Service Charge 10%
				</div>
				<hr style={{ border: "1px solid grey", width: "100%" }} />
				<h1>Total</h1>
			</div>
		</div>
	)
}

export default OrderView
