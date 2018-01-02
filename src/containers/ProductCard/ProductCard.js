import React from "react";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import PropTypes from "prop-types";
import { addedToCart } from "../../actions/cartActions.js";

const ProductCard = (props, context) => {
	let { addToCart, price } = props;
	// Determine 'on-the-fly' if the sku is inside
	// of our cart object. This keeps us from having
	// a needless boolean and wasting memory.
	let isInCart = context.store
		.getState()
		.cartReducer.cart.find(item => item.hasOwnProperty(props.sku));
	let badge = isInCart ? "ADDED TO CART" : null;

	return (
		<div>
			<Card imageStyles={{ width: "250px" }} badge={badge} {...props} />
			{price && <div>{price}</div>}
			{addToCart && (
				<Button
					text="ADD TO CART"
					classes="btn-primary add-to-cart"
					onClick={() => addedToCart(props)}
				/>
			)}
		</div>
	);
};
// This links the store to the context object.
ProductCard.contextTypes = {
	store: PropTypes
};

export default ProductCard;
