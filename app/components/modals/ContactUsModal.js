import React from "react";
import ContactUsForm from "../ContactUsForm";

const ContactUsModal = (props) => {
	return (
		<div className="modal-container">
			<div className="modal-container__notice">
				<p>
					**Our quick response team will contact you within 3 hours.
				</p>
			</div>
			<label
				onClick={props.toggleDisplayContactUsModal}
				className="modal-container__cancel-button"
			>
				<span></span>
			</label>

			<ContactUsForm />
		</div>
	);
};

export default ContactUsModal;
