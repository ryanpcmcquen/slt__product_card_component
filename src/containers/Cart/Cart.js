import React from "react";
import PropTypes from "prop-types";

const activeCartStyle = {
	color: "#E57D24"
};

// Because this component only has a `render` it
// can be a function, rather than a class.
const Cart = (props, context) => {
	let aCart = context.store.getState().cartReducer.cart || [];
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
// This links the store to the context object.
Cart.contextTypes = {
	store: PropTypes
};

export default Cart;
