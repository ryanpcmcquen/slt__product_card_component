const cartReducer = (state = [], action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return [
				...state,
				{
					[action.sku]: action.quantity
				}
			];
		default:
			return action;
	}
};
export default cartReducer;