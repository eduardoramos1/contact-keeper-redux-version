import React from "react";

import ContactList from "./ContactList";
import Pagination from "./Pagination";

import SearchBar from "./SearchBar";

import AddContact from "./../modals/AddContact";
import EditContact from "./../modals/EditContact";

const Contacts = () => {
	return (
		<div className="center container">
			<h2>Contatos</h2>

			<SearchBar />

			<AddContact />
			<EditContact />

			<ContactList />
			<Pagination />

			<div className="fixed-action-btn modal-trigger" href="#add-contact-modal">
				<a href="#!" className="btn-floating btn-large red">
					<i className="large material-icons white-text ">add</i>
				</a>
			</div>
		</div>
	);
};

export default Contacts;
