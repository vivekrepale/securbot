import React from "react";

const ContactUsForm = (props) => {
	return (
		<div className="container">
			<form action="" className="container__form">
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
