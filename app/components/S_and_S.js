import React from "react";
import { withRouter } from "react-router-dom";

import ssCommercial from "../assets/images/ssCommercial.png";
import ssResidential from "../assets/images/ssResidential.png";
import ssAccessControl from "../assets/images/ssAccessControl.png";
import ssPublicAddress from "../assets/images/ssPublicAddress.png";
import ssAMC from "../assets/images/ssAMC.png";

const S_and_S = () => {
	return (
		<div className="sscontainer">
			<div className="sscontainer__s">
				<img
					src={ssCommercial}
					alt="ssCommercial"
					className="sscontainer__s__img"
				/>
				<div className="sscontainer__s__text">
					<h3>Our commercial CCTV solutions!</h3>
					<p>
						Keep an eye on your store or office with our commercial
						CCTV solutions.
					</p>
				</div>
			</div>

			<div className="sscontainer__s">
				<img
					src={ssResidential}
					alt="ssResidential"
					className="sscontainer__s__img"
				/>
				<div className="sscontainer__s__text">
					<h3>Our residential CCTV solutions!</h3>
					<p>
						Secure you home and valuable with our state of the art
						residential CCTV solutions.
					</p>
				</div>
			</div>

			<div className="sscontainer__s">
				<img
					src={ssAccessControl}
					alt="ssAccessControl"
					className="sscontainer__s__img"
				/>
				<div className="sscontainer__s__text">
					<h3>Our Access Control System!</h3>
					<p>
						Keep an eye on all ins and out using our access control
						system services.
					</p>
				</div>
			</div>

			<div className="sscontainer__s">
				<img
					src={ssPublicAddress}
					alt="ssPublicAddress"
					className="sscontainer__s__img"
				/>
				<div className="sscontainer__s__text">
					<h3>Our Public Address System!</h3>
					<p>
						Our portable public address systems are designed to be
						powerful and meet your sound reinforcement needs on the
						go.
					</p>
				</div>
			</div>

			<div className="sscontainer__s">
				<img src={ssAMC} alt="ssAMC" className="sscontainer__s__img" />
				<div className="sscontainer__s__text">
					<h3>Annual Maintenance Contract!</h3>
					<p>
						We undertake annual maintenance contract for CCTV
						systems. Under this contract our technicians visits the
						client as per selected AMC plan As well as our
						technicians do visit on call basis also.
					</p>
				</div>
			</div>
		</div>
	);
};

export default withRouter(S_and_S);
