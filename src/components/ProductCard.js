import React from "react";
import Card from "./Card";

export default class ProductCard extends Card {
	addedToCart = () => {
		this.setState({ isInCart: true });
	};
	constructor(props) {
		super(props);
		this.state = {
			isInCart: false
		};
	}
	render() {
		let { addToCart, price } = this.props;
		let badge = this.state.isInCart && "ADDED TO CART";

		return (
			<div>
				<Card badge={badge} {...this.props} />
				{price && <div>{price}</div>}
				{addToCart && (
					<a className="btn btn-success add-to-cart" onClick={this.addedToCart}>
						ADD TO CART
					</a>
				)}
			</div>
		);
	}
}
