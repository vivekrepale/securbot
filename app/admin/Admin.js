import React, { useState } from "react";

import AdminSignIn from "./AdminSignIn.js";
import Products from "./Products.js";
import Testimonials from "./Testimonials.js";

const Admin = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	return <div>{loggedIn ? "" : <AdminSignIn />}</div>;
};

export default Admin;
