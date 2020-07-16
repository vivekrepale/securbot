import React, { useState } from "react";
import Axios from "axios";

const ContactUsForm = (props) => {
	const [name, setName] = useState();
	const [contact, setContact] = useState();
	const [pincode, setPincode] = useState();
	const [requirement, setRequirement] = useState();

	const handleSubmit = async (e) => {
		e.preventDefault();
		//alert("You submitted the form!!");
		try {
			await Axios.post(
				"https://securbot.netlify.app/.netlify/functions/sendEmail",
				{
					name: name,
					contact: contact,
					pincode: pincode,
					requirement: requirement,
				}
			);
			console.log("Eamil was successfully sent");
		} catch (err) {
			console.log(err);
		}
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
