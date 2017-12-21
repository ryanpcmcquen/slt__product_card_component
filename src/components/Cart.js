import React from "react";
import store from "../store";
const activeCartStyle = {
	color: "#E57D24"
};

class Cart extends React.Component {
	render() {
		let aCart = store.getState().cartReducer;
		return (
			<div>
				<i
					className="glyphicon glyphicon-shopping-cart"
					style={aCart.length && activeCartStyle}
				/>
				<span className="shopping-cart-count">({aCart.length})</span>
			</div>
		);
	}
}

export default Cart;
