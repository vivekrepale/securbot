import React from "react";
import { withRouter, Link } from "react-router-dom";

const Link1 = () => {
	return (
		<div>
			<Link to="/"> Link to something</Link>
			<Link to="/Dope"> Link to underworld</Link>
		</div>
	);
};

export default withRouter(Link1);
