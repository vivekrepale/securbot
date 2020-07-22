import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

const Admin = () => {
	useEffect(() => {
		window.scrollTo({
			top: 400,
			behavior: "smooth",
		});
	}, []);

	return <div>Hi Admin!</div>;
};

export default withRouter(Admin);
