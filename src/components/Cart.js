import React from "react";

const activeCartStyle = {
	color: "#E57D24"
};

export default class Cart extends React.Component {
	render() {
		return (
			<div>
				<i
					className="glyphicon glyphicon-shopping-cart"
					style={activeCartStyle}
				/>(<span class="shopping-cart-count">0</span>)
			</div>
		);
	}
}
