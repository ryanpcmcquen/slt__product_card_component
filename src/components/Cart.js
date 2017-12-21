import React from "react";
import store from "../store";
const activeCartStyle = {
	color: "#E57D24"
};

class Cart extends React.Component {
	render() {
		let cartObj =
			store.getState().cartReducer.type !== "@@INIT"
				? store.getState().cartReducer
				: null;
		return (
			<div>
				<i
					className="glyphicon glyphicon-shopping-cart"
					style={
						cartObj &&
						Object.keys(cartObj).length &&
						activeCartStyle
					}
				/>
				(<span className="shopping-cart-count">
					{cartObj ? (
						Object.keys(cartObj).map(item => cartObj[item])
					) : (
						0
					)}
				</span>)
			</div>
		);
	}
}

export default Cart;
