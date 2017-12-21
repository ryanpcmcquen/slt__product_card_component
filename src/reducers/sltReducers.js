import * as Redux from "redux";
import cartReducer from "./cartReducer";

const sltReducers = Redux.combineReducers({
	cartReducer
});

export default sltReducers;
