import {
	GET_CONTACTS,
	CONTACT_LOADING,
	CONTACT_ERROR,
	GET_TOTAL_CONTACTS,
	ADD_CONTACT
} from "../actions/types";

const initialState = {
	contacts: null,
	currentContact: null,
	filteredContacts: null,
	loading: false,
	error: null,
	totalContacts: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_CONTACTS:
			return {
				...state,
				contacts: action.payload,
				loading: false
			};

		case ADD_CONTACT:
			return {
				...state,
				loading: false
			};

		case GET_TOTAL_CONTACTS:
			return {
				...state,
				totalContacts: action.payload,
				loading: false
			};

		case CONTACT_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			};

		case CONTACT_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
};
