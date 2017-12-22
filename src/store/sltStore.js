import * as Redux from "redux";
import sltReducers from "../reducers/sltReducers";

const sltStore = Redux.createStore(
	sltReducers,
	// Enable DevTools:
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default sltStore;
