import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import ContactUsModal from "./modals/ContactUsModal";

const Home = () => {
	const [displayContactUsModal, setDisplayContactUsModal] = useState(false);

	const toggleDisplayContactUsModal = () => {
		if (displayContactUsModal) {
			setDisplayContactUsModal(false);
		} else {
			setDisplayContactUsModal(true);
		}
	};

	return (
		<div className="home">
			<div className="home__button">
				<button
					onClick={toggleDisplayContactUsModal}
					className="home__button__btn btn text-3"
				>
					Get an estimate!
				</button>
			</div>

			{displayContactUsModal ? (
				<ContactUsModal
					toggleDisplayContactUsModal={toggleDisplayContactUsModal}
				/>
			) : (
				""
			)}
		</div>
	);
};

export default withRouter(Home);
