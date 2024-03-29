import { combineReducers } from "redux";
import contactReducer from "./contactReducer";
import authReducer from "./authReducer";

export default combineReducers({
	contact: contactReducer,
	auth: authReducer
});
