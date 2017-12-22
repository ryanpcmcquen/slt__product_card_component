const cartReducer = (state = { cart: [] }, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return {
				...state,
				cart: [...state.cart, { [action.sku]: action.quantity }]
			};
		default:
			return state;
	}
};
export default cartReducer;
