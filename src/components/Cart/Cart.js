import React from "react";
import sltStore from "../../store/sltStore";

const activeCartStyle = {
	color: "#E57D24"
};

// Because this component only has a `render` and
// does not require `this.props`, it can be a function,
// rather than a class.
const Cart = () => {
	let aCart = sltStore.getState().cartReducer.cart || [];
	return (
		<div>
			<i
				className="glyphicon glyphicon-shopping-cart"
				style={aCart.length ? activeCartStyle : null}
			/>
			<span className="shopping-cart-count">({aCart.length || 0})</span>
		</div>
	);
};

export default Cart;
