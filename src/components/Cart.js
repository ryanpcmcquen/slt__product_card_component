import React from "react";
import store from "../store";
const activeCartStyle = {
	color: "#E57D24"
};

class Cart extends React.Component {
	render() {
		let aCart = store.getState().cartReducer.cart || [];
		return (
			<div>
				<i
					className="glyphicon glyphicon-shopping-cart"
					style={aCart.length ? activeCartStyle : null}
				/>
				<span className="shopping-cart-count">
					({aCart.length || 0})
				</span>
			</div>
		);
	}
}

export default Cart;
