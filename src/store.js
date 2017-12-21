import * as Redux from "redux";
import sltReducers from "./reducers/sltReducers";

const store = Redux.createStore(
	sltReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
