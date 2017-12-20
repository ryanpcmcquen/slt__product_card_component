import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import sltReducers from "./reducers/sltReducers";

const store = createStore(sltReducers);

const App = () => (
	<div>
		<Cart />
		<ProductCard
			sku="3436474"
			alt="Instant Pot"
			addToCart
			price="$299.95"
		/>
		{/*
		<ProductCard sku="3422086" alt="Teakhaus Edge Grain cutting board" />
		*/}
	</div>
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector(".react-component-container")
);
