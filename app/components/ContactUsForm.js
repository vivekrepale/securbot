import React, { useState } from "react";
import Axios from "axios";

const ContactUsForm = (props) => {
	const [name, setName] = useState();
	const [contact, setContact] = useState();
	const [email, setEmail] = useState();
	const [pincode, setPincode] = useState();
	const [requirement, setRequirement] = useState();

	const handleSubmit = async (e) => {
		e.preventDefault();
		//alert("You submitted the form!!");

		await Axios.post(
			"https://securbot.netlify.app/.netlify/functions/sendEmail",
			{
				name: name,
				contact: contact,
				eamil: email,
				pincode: pincode,
				requirement: requirement,
			}
		).then(
			(response) => {
				if (response.status == 200) {
					props.toggleDisplayForm();
					props.toggleDisplaySuccessMessage();
				} else if (response.status == 502) {
					props.toggleDisplayErrorMessage();
					props.toggleDisplayForm();
				}
				console.log(response);
			},
			(err) => {
				props.toggleDisplayErrorMessage();
				props.toggleDisplayForm();
			}
		);
	};

	return (
		<div className="container">
			<form onSubmit={handleSubmit} className="container__form">
				<input
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Your name!"
					className="container__form__input"
				/>

				<input
					onChange={(e) => setContact(e.target.value)}
					type="text"
					placeholder="Your contact number!"
					className="container__form__input"
				/>

				<input
					onChange={(e) => setEmail(e.target.value)}
					type="text"
					placeholder="Your contact email!"
					className="container__form__input"
				/>

				<input
					onChange={(e) => setPincode(e.target.value)}
					type="text"
					placeholder="Your pincode!"
					className="container__form__input"
				/>

				<input
					onChange={(e) => setRequirement(e.target.value)}
					type="text"
					placeholder="Your requirement in short!"
					className="container__form__input"
				/>

				<input
					type="submit"
					value="Submit"
					className="container__form__submit-button"
				/>
			</form>
		</div>
	);
};

export default ContactUsForm;

//http://localhost:9000/.netlify/functions/sendEmail.js
