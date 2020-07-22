import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

const Products = () => {
	useEffect(() => {
		window.scrollTo({
			top: 400,
			behavior: "smooth",
		});
	}, []);

	return <div></div>;
};

export default withRouter(Products);
