import React from "react";
import Axios from "axios";

const ContactUsForm = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		//alert("You submitted the form!!");
		try {
			Axios.post(
				"https://securbot.netlify.app/.netlify/functions/sendEmail",
				{
					name: "test",
					contact: "45454454545",
					pincode: "4454545",
					requirement: "Hi test",
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
					type="text"
					placeholder="Your name!"
					className="container__form__input"
				/>

				<input
					type="text"
					placeholder="Your email!"
					className="container__form__input"
				/>

				<input
					type="text"
					placeholder="Your phone no.!"
					className="container__form__input"
				/>

				<input
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
