import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

const Products = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return <div></div>;
};

export default withRouter(Products);
