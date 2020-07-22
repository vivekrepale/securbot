import React from "react";

const AdminSignIn = () => {
	return (
		<div className="login">
			<form action="login__form">
				<input
					type="text"
					label="Username"
					className="login__form__input"
				/>
				<input
					type="password"
					label="Password"
					className="login__form__input"
				/>
				<input
					type="submit"
					label="Login"
					className="login__form__submit"
				/>
			</form>
		</div>
	);
};

export default AdminSignIn;
