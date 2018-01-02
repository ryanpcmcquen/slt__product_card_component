import sltStore from "../store/sltStore";

export const addedToCart = props => {
	sltStore.dispatch({
		quantity: 1,
		sku: props.sku,
		type: "ADD_TO_CART"
	});
};
