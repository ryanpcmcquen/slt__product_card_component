import React from "react";
import ReactDOM from "react-dom";
// Because of the way the ReactRedux library
// is set up, it requires a special type of
// import to import the global object.
// Using the global name allows us to
// write code that is more portable to
// a client-side only environment.
import * as ReactRedux from "react-redux";
import ProductCard from "./containers/ProductCard/ProductCard";
import Cart from "./containers/Cart/Cart";
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
			addToCart
			alt="Instant Pot"
			price="$299.95"
			sku="3436474"
		/>
		<br />
		<ProductCard
			addToCart
			alt="Teakhaus Edge Grain cutting board"
			price="$200.00"
			sku="3422086"
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
