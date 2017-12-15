import React from "react";
import Card from "./Card";

export default class ProductCard extends Card {
	render() {
		let { addToCart, price } = this.props;
		return (
			<div>
				<Card {...this.props} />
				{price && <div>{price}</div>}
				{addToCart && <a className="btn btn-success add-to-cart">ADD TO CART</a>}
			</div>
		);
	}
}
