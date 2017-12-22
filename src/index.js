import React from "react";
import ReactDOM from "react-dom";
import * as ReactRedux from "react-redux";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import sltStore from "./store/sltStore";

const CartApp = () => (
	<div>
		<Cart />
		<br />
	</div>
);

const App = () => (
	<div>
		<ProductCard
			sku="3436474"
			alt="Instant Pot"
			addToCart
			price="$299.95"
		/>
		<br />
		<ProductCard
			sku="3422086"
			alt="Teakhaus Edge Grain cutting board"
			price="$200.00"
			addToCart
		/>
	</div>
);

const appRender = () => {
	ReactDOM.render(
		<ReactRedux.Provider store={sltStore}>
			<App {...sltStore.getState()} />
		</ReactRedux.Provider>,
		document.querySelector(".react-component-container")
	);
};

const cartRender = () => {
	ReactDOM.render(
		<ReactRedux.Provider store={sltStore}>
			<CartApp {...sltStore.getState()} />
		</ReactRedux.Provider>,
		document.querySelector(".react-cart-container")
	);
};

sltStore.subscribe(appRender);
appRender();

sltStore.subscribe(cartRender);
cartRender();
