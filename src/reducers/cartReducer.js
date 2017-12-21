const cartReducer = (state = {}, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return (state.sku = state.quantity);
		default:
			return state;
	}
	console.log(state);
};
export default cartReducer;
