import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import sltStore from "../store/sltStore";
import { addedToCart } from "../actions/cartActions.js";

const ProductCard = props => {
	let { addToCart, price } = props;
	let isInCart = sltStore
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

export default ProductCard;
