import React from "react";
import sltStore from "../store/sltStore";

const activeCartStyle = {
	color: "#E57D24"
};

class Cart extends React.Component {
	render() {
		let aCart = sltStore.getState().cartReducer.cart || [];
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
