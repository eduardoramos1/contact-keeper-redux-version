import React, { useEffect } from "react";
import { connect } from "react-redux";

import Spinner from "./../Layout/Spinner";
import ContactItem from "./ContactItem";

import {
	setLoading,
	getPaginatedContacts
} from "./../../actions/contactActions";

const ContactList = ({
	setLoading,
	getPaginatedContacts,
	contact: { loading, contacts, error, filteredContacts }
}) => {
	useEffect(() => {
		setLoading();
		getPaginatedContacts(1, 6);
		// eslint-disable-next-line
	}, []);

	if (loading) {
		return <Spinner />;
	} else {
		if (error !== null) {
			return (
				<div className="grey-text text-darken-2">
					Houve um erro ao tentar buscar dados do servidor. Tente novamente mais
					tarde.
				</div>
			);
		}

		if (filteredContacts !== null) {
			return filteredContacts.length > 0 ? (
				<div className="row">
					{filteredContacts.map(cont => (
						<ContactItem cont={cont} key={cont._id} />
					))}
				</div>
			) : (
				<div className="grey-text text-darken-2">
					Não teve resultado para sua busca...
				</div>
			);
		}

		return (
			<div className="row">
				{contacts !== null && contacts.length > 0 ? (
					contacts.map(cont => <ContactItem cont={cont} key={cont._id} />)
				) : (
					<div className="grey-text text-darken-2">
						Não há contatos para mostrar...
					</div>
				)}
			</div>
		);
	}
};

const mapStateToProps = state => ({
	contact: state.contact
});

export default connect(mapStateToProps, {
	setLoading,
	getPaginatedContacts
})(ContactList);
