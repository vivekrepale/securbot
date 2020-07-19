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
				email: email,
				pincode: pincode,
				requirement: requirement,
			}
		).then(
			(response) => {
				if (response.status == 200) {
					if (props.modal) {
						props.toggleDisplayForm();
						props.toggleDisplaySuccessMessage();
					} else {
						alert(
							"**Our quick response team will contact you within 3 hours."
						);
					}
				} else if (response.status == 502) {
					if (props.modal) {
						props.toggleDisplayErrorMessage();
						props.toggleDisplayForm();
					} else {
						alert(
							"**There was an error while sending your response please try again!"
						);
					}
				}
				console.log(response);
			},
			(err) => {
				if (props.modal) {
					props.toggleDisplayErrorMessage();
					props.toggleDisplayForm();
				} else {
					alert(
						"**There was an error while sending your response please try again!"
					);
				}
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
					required
				/>

				<input
					onChange={(e) => setContact(e.target.value)}
					type="tel"
					placeholder="Your 10-digit contact number!"
					className="container__form__input"
					pattern="[0-9]{10}"
					required
				/>

				<input
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Your contact email!"
					className="container__form__input"
					required
				/>

				<input
					onChange={(e) => setPincode(e.target.value)}
					type="tel"
					placeholder="Your 6-digit pincode!"
					className="container__form__input"
					pattern="[0-9]{6}"
					required
				/>

				<input
					onChange={(e) => setRequirement(e.target.value)}
					type="text-box"
					placeholder="Your requirement in short!"
					className="container__form__input container__form__input--requirement"
					required
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
