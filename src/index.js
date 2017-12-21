import React from "react";
import ReactDOM from "react-dom";
import * as ReactRedux from "react-redux";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import store from "./store";

const App = () => (
	<div>
		<Cart />
		<ProductCard
			sku="3436474"
			alt="Instant Pot"
			addToCart
			price="$299.95"
		/>

		<ProductCard
			sku="3422086"
			alt="Teakhaus Edge Grain cutting board"
			price="$200.00"
		/>
	</div>
);

ReactDOM.render(
	<ReactRedux.Provider store={store}>
		<App />
	</ReactRedux.Provider>,
	document.querySelector(".react-component-container")
);
