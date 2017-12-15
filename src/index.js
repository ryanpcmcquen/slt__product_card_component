import React from "react";
import ReactDOM from "react-dom";
import ProductCard from "./components/ProductCard";

const App = () => (
	<div>
		<ProductCard sku="3436474" alt="Instant Pot" addToCart price="$299.95" />
		<ProductCard sku="3422086" alt="Teakhaus Edge Grain cutting board" />
	</div>
);

ReactDOM.render(<App />, document.querySelector(".react-component-container"));
