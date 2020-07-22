import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";

const Admin = () => {
	useEffect(() => {
		window.scrollTo({
			top: 400,
			behavior: "smooth",
		});
	}, []);

	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const handleSubmit = async (e) => {
		e.preventDefault();

		await Axios.post(
			"https://securbot.netlify.app/.netlify/functions/verifyAdmin",
			{
				username: username,
				password: password,
			}
		).then(
			(response) => console.log(response),
			(err) => console.log(err)
		);
	};

	return (
		<div className="admin-container">
			<form onSubmit={handleSubmit} className="admin-container__form">
				<input
					onChange={(e) => setUsername(e.target.value)}
					type="text"
					className="admin-container__form__input"
				/>

				<input
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					className="admin-container__form__input"
				/>
				<input
					type="submit"
					value="Submit"
					className="admin-container__form__input"
				/>
			</form>
		</div>
	);
};

export default withRouter(Admin);
