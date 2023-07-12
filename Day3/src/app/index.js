import counter from "./counter";
import auth from "./auth";
import { combineReducers } from "redux";

const allReducers = combineReducers({
	counter,
	auth,
});
export default allReducers;
