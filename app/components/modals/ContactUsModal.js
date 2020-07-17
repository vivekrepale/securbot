import React, { useState } from "react";
import ContactUsForm from "../ContactUsForm";

const ContactUsModal = (props) => {
	const [displaySuccessMessage, setDisplaySuccessMessage] = useState(false);
	const [displayErrorMessage, setDisplayErrorMessage] = useState(false);
	const [displayForm, setDisplayForm] = useState(true);

	const toggleDisplaySuccessMessage = () => {
		setDisplaySuccessMessage(true);
	};

	const toggleDisplayErrorMessage = () => {
		setDisplayErrorMessage(true);
	};

	const toggleDisplayForm = () => {
		setDisplayForm(false);
	};

	return (
		<div className="modal-container">
			{displaySuccessMessage ? (
				<div className="modal-container__notice">
					<p>
						**Our quick response team will contact you within 3
						hours.
					</p>
				</div>
			) : (
				""
			)}

			{displayErrorMessage ? (
				<div className="modal-container__notice">
					<p>
						**There was an error while sending your response please
						try again!
					</p>
				</div>
			) : (
				""
			)}

			<label
				onClick={props.toggleDisplayContactUsModal}
				className="modal-container__cancel-button"
			>
				<span></span>
			</label>

			{displayForm ? (
				<ContactUsForm
					toggleDisplaySuccessMessage={toggleDisplaySuccessMessage}
					toggleDisplayErrorMessage={toggleDisplayErrorMessage}
					toggleDisplayForm={toggleDisplayForm}
				/>
			) : (
				""
			)}
		</div>
	);
};

export default ContactUsModal;
