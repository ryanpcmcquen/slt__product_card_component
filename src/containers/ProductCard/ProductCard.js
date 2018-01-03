import React from "react";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import * as ReactRedux from "react-redux";
import { addedToCart } from "../../actions/cartActions.js";

let ProductCard = (props, context) => {
	let { addToCart, cart, price } = props;
	// Determine 'on-the-fly' if the sku is inside
	// of our cart object. This keeps us from having
	// a needless boolean and wasting memory.
	let isInCart = cart.find(item => item.hasOwnProperty(props.sku));
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

// This allows us to access the `state` object
// as a property inside of the `ProductCard` container.
ProductCard = ReactRedux.connect((state, ownProps) => {
	return { cart: state.cartReducer.cart, ...ownProps };
})(ProductCard);

export default ProductCard;
