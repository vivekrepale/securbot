import React from "react";
import { withRouter } from "react-router-dom";

const Home = () => {
	return (
		<div className="button">
			<button className="button__btn btn text-3">Get an estimate!</button>
		</div>
	);
};

export default withRouter(Home);
