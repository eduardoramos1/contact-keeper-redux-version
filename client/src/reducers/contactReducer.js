import { GET_CONTACTS, CONTACT_LOADING } from "../actions/types";

const initialState = {
	contacts: null,
	currentContact: null,
	filteredContacts: null,
	loadingContacts: false,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_CONTACTS:
			return {
				...state,
				contacts: action.payload,
				loading: false
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
