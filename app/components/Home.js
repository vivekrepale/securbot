import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import ContactUsModal from "./modals/ContactUsModal";

import SvgOpen from "../components/svg/Open.js";

const Home = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);

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

			<div className="home__info">
				<div className="home__info__title">
					<div>
						<h1 className="about-us__heading__text-1">Secur</h1>
						<h1 className=" about-us__heading__text-2">Bot</h1>
					</div>
					<h4>...by Siddharth Enterprises.</h4>
				</div>
				<div className="home__info__sub-title">
					<h3>The CCTV installation company.</h3>
				</div>
				<div className="home__info__text-1">
					<p>
						A Family business that makes us passionate about
						Surveillance Security!
					</p>
				</div>
				<div className="home__info__text-2">
					<p>
						We at <span>"SecurBot"</span> have always believed that
						true commitment to quality and passion for innovation is
						always rewarded. And that is why we have dedicated
						ourselves to bringing to our customer the{" "}
						<span>
							best and the most innovative electronic security
							equipment.
						</span>{" "}
						This passion has been appreciated by security
						specialists in India,{" "}
						<span>
							we are fully committed to provide quality products
							backed by efficient and prompt after sales service.
						</span>{" "}
						No wonders then, that we are leading manufacturer in
						India.
					</p>
				</div>
			</div>

			<div className="home__services">
				<h1 className="home__services__title">
					We are providing our expertise in following fields:
				</h1>
				<div className="home__services__service">
					<h2 className="home__services__service--1">
						<SvgOpen className="home__services__service--icon" />
						Closed circuit television system. (CCTVs)
					</h2>

					<h2 className="home__services__service--2">
						<SvgOpen className="home__services__service--icon" />
						Video door phone.
					</h2>

					<h2 className="home__services__service--3">
						<SvgOpen className="home__services__service--icon" />
						GSM Alarm Security Panels.
					</h2>

					<h2 className="home__services__service--4">
						<SvgOpen className="home__services__service--icon" />
						Home automations.
					</h2>

					<h2 className="home__services__service--5">
						<SvgOpen className="home__services__service--icon" />
						Network boosters.
					</h2>

					<h2 className="home__services__service--6">
						<SvgOpen className="home__services__service--icon" />
						Annual maintenance contract.
					</h2>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Home);
