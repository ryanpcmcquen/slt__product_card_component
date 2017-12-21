import React from "react";

const activeCartStyle = {
	color: "#E57D24"
};

class Cart extends React.Component {
	render() {
		return (
			<div>
				<i
					className="glyphicon glyphicon-shopping-cart"
					style={activeCartStyle}
				/>
				(<span className="shopping-cart-count">0</span>)
			</div>
		);
	}
}

export default Cart;
