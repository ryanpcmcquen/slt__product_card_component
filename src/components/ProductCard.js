import React from "react";
import Card from "./Card";
import Button from "./Button";

export default class ProductCard extends React.Component {
	addedToCart = () => {
		this.setState({ isInCart: true });
	};
	constructor(props) {
		// Get properties/context (`this`) from parent.
		super(props);

		// `.setState` is the only way you should set
		// the state of a component, _unless_ you are
		// in the constructor (since `.state` does not
		// exist yet).
		this.state = { isInCart: false };
	}
	render() {
		let { addToCart, price } = this.props;
		let badge = this.state.isInCart ? "ADDED TO CART" : null;

		return (
			<div>
				<Card badge={badge} {...this.props} />
				{price && <div>{price}</div>}
				{addToCart && (
					<Button
						text="ADD TO CART"
						classes="btn-primary add-to-cart"
						onClick={this.addedToCart}
					/>
				)}
			</div>
		);
	}
}
