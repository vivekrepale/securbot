import React, { useState } from "react";

import SvgFacebook from "../components/svg/Facebook.js";
import SvgWhatsApp from "../components/svg/WhatsApp.js";
import SvgGmail from "../components/svg/email.js";
import SvgCall from "../components/svg/call.js";
import SvgOpen from "../components/svg/Open.js";
import SvgClose from "../components/svg/Close.js";

const SocialHook = () => {
	const [content, setContent] = useState(true);

	const toggleDisplayContent = () => {
		if (content) {
			setContent(false);
		} else if (!content) {
			setContent(true);
		}
	};

	const Content = () => {
		return (
			<div className="hook__content">
				<a href="https://www.facebook.com/SecurBotOfficial">
					<SvgFacebook className="hook__content__icon hook__content__icon--fb" />
				</a>
				<a href="tel:+918080605001">
					<SvgCall fill="white" className="hook__content__icon" />
				</a>
				<a href="https://api.whatsapp.com/send?phone=+918080605001">
					<SvgWhatsApp className="hook__content__icon" />
				</a>
				<a href="mailto:enquiry@securbot.in">
					<SvgGmail fill="white" className="hook__content__icon" />
				</a>
			</div>
		);
	};

	return (
		<div className="hook">
			{content ? <Content /> : ""}
			<div onClick={toggleDisplayContent} className="hook__btn">
				{content ? (
					<SvgClose className="hook__btn__icon" />
				) : (
					<SvgOpen className="hook__btn__icon" />
				)}
			</div>
		</div>
	);
};

export default SocialHook;
