import React from "react";

const ContactItem = ({ cont }) => {
	return (
		<div className="col s12  l4 ">
			<div className="card-panel white">
				<span className="grey-text text-darken-2">
					<div className="row">
						<div className="col s12 right-align">
							<i className="material-icons icon-bigger indigo-text darken-4 btn-edit">
								edit
							</i>
							<i className="material-icons icon-bigger red-text darken-2 btn-delete">
								delete
							</i>
						</div>
						<div className="col s4 left-align"></div>

						<div className="col s12 left-align">{cont.name}</div>
						<div className="col s12 left-align">{cont.phone}</div>
						<div className="col s12 left-align">{cont.email}</div>
					</div>
				</span>
			</div>
		</div>
	);
};

export default ContactItem;
