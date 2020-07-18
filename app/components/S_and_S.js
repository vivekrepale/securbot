import React from "react";
import { withRouter } from "react-router-dom";

import ssCommercial from "../assets/images/ssCommercial.png";
import ssResidential from "../assets/images/ssResidential.png";
import ssAccessControl from "../assets/images/ssAccessControl.png";
import ssPublicAddress from "../assets/images/ssPublicAddress.png";
import ssAMC from "../assets/images/ssAMC.png";
import ssGSM1_1 from "../assets/images/ssGSM1-1.png";
import ssGSM1_2 from "../assets/images/ssGSM1-2.png";
import ssGSM2 from "../assets/images/ssGSM2.png";
import ssGSM3 from "../assets/images/ssGSM3.png";
import ssGSM4 from "../assets/images/ssGSM4.png";
import ssGSM5 from "../assets/images/ssGSM5.png";
import ssGSM6 from "../assets/images/ssGSM6.png";

import SvgCctv2 from "../components/svg/cctv2.js";
import SvgCctvPhone from "../components/svg/cctv-phone.js";
import SvgCctv1 from "../components/svg/cctv1.js";
import SvgCctvWifi from "../components/svg/cctv-wifi.js";

const S_and_S = () => {
	return (
		<div className="sscontainer">
			<div className="sscontainer__s sscontainer__s--1">
				<SvgCctv2 fill="black" stroke="white" className="svg" />
				<div className="sscontainer__s__text">
					<h3>Our commercial CCTV solutions!</h3>
					<p>
						Keep an eye on your store or office with our commercial
						CCTV solutions.
					</p>
				</div>
				<div className="sscontainer__s__image">
					<img src={ssCommercial} alt="ssCommercial" />
				</div>
			</div>

			<div className="sscontainer__s sscontainer__s--2">
				<SvgCctv1 fill="black" stroke="white" className="svg" />
				<div className="sscontainer__s__text">
					<h3>Our residential CCTV solutions!</h3>
					<p>
						Secure you home and valuable with our state of the art
						residential CCTV solutions.
					</p>
				</div>
				<div className="sscontainer__s__image">
					<img src={ssResidential} alt="ssResidential" />
				</div>
			</div>

			<div className="sscontainer__s sscontainer__s--3">
				<SvgCctvPhone fill="black" stroke="white" className="svg" />
				<div className="sscontainer__s__text">
					<h3>Our Access Control System!</h3>
					<p>
						Keep an eye on all ins and out using our access control
						system services.
					</p>
				</div>
				<div className=" sscontainer__s--3__image">
					<img
						src={ssGSM1_1}
						alt="ssGSM1_1"
						className="sscontainer__s--3__image__img"
					/>
					<img
						src={ssGSM2}
						alt="ssGSM2"
						className="sscontainer__s--3__image__img"
					/>
					<img
						src={ssGSM3}
						alt="ssGSM3"
						className="sscontainer__s--3__image__img"
					/>
					<img
						src={ssGSM6}
						alt="ssGSM6"
						className="sscontainer__s--3__image__img"
					/>
					<img
						src={ssGSM4}
						alt="ssGSM4"
						className="sscontainer__s--3__image__img"
					/>
					<img
						src={ssGSM5}
						alt="ssGSM5"
						className="sscontainer__s--3__image__img"
					/>
					<img
						src={ssGSM1_2}
						alt="ssGSM1_2"
						className="sscontainer__s--3__image__img"
					/>
				</div>
			</div>

			<div className="sscontainer__s sscontainer__s--4">
				<SvgCctvWifi fill="black" stroke="white" className="svg" />
				<div className="sscontainer__s__text">
					<h3>Our Public Address System!</h3>
					<p>
						Our portable public address systems are designed to be
						powerful and meet your sound reinforcement needs on the
						go.
					</p>
				</div>
				<div className="sscontainer__s__image">
					<img src={ssPublicAddress} alt="ssPublicAddress" />
				</div>
			</div>

			<div className="sscontainer__s sscontainer__s--5">
				<SvgCctv2 fill="black" stroke="white" className="svg" />
				<div className="sscontainer__s__text">
					<h3>Our Access Control System!</h3>
					<p>
						Keep an eye on all ins and out using our access control
						system services.
					</p>
				</div>
				<div className="sscontainer__s__image">
					<img src={ssAccessControl} alt="ssAccessControl" />
				</div>
			</div>

			<div className="sscontainer__s sscontainer__s--6">
				<SvgCctv1 fill="black" stroke="white" className="svg" />
				<div className="sscontainer__s__text">
					<h3>Annual Maintenance Contract!</h3>
					<p>
						Under this contract our technicians visits the client as
						per selected AMC plan.
					</p>
				</div>
				<div className="sscontainer__s__image">
					<img src={ssAMC} alt="ssAMC" />
				</div>
			</div>

			<div className="sscontainer__s sscontainer__s--7">
				<SvgCctv2 fill="black" stroke="white" className="svg" />
				<div className="sscontainer__s__text">
					<h3>Our Fire Alarm system!</h3>
					<p>
						We undertake annual maintenance contract for CCTV
						systems. Under this contract our technicians visits the
						client as per selected AMC plan As well as our
						technicians do visit on call basis also.
					</p>
				</div>
				<div className="sscontainer__s__image">
					<img src={ssAccessControl} alt="ssAMC" />
				</div>
			</div>
		</div>
	);
};

export default withRouter(S_and_S);
