import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import ContactUsForm from "./ContactUsForm.js";

import SvgLocation from "../components/svg/location2.js";

const ContactUs = () => {
	useEffect(() => {
		window.scrollTo({
			top: 400,
			behavior: "smooth",
		});
	}, []);

	return (
		<div className="contact-us">
			<div className="contact-us__contact">
				<iframe
					className="contact-us__contact__map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7998357388406!2d73.01596951442907!3d19.072536287089903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c16a8a799c07%3A0x4aea4241a7557ac4!2sSiddharth%20Enterprises!5e0!3m2!1sen!2sin!4v1594566494689!5m2!1sen!2sin"
					frameBorder="0"
					allowFullScreen=""
					aria-hidden="false"
					tabIndex="0"
					//https://www.reddit.com/r/firefox/comments/fpptyj/firefox_content_security_policy_console_output/
					//content-security-policy="object-src 'none';base-uri 'self';script-src 'nonce-xGcH8cULpuwtFbXcC3cvKQ==' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/geo-maps-api/1"
				></iframe>

				<div className="contact-us__contact__office">
					<div className="contact-us__contact__office__address">
						<h4 className="contact-us__contact__office__address__location">
							Mumbai (Head-office)
						</h4>
						<span className="contact-us__contact__office__address__text">
							{" "}
							<p>SHOP No. 01,</p> <p>PLOT No. 112,</p>{" "}
							<p>Opp. BOMBAY PAINTS, SECTOR - 23,</p>
							<p>
								{" "}
								JANTA MARKET, TURBHE STN RD, TURBHE, NAVI
								MUMBAI,
							</p>{" "}
							MAHARASHTRA. 400705
						</span>
						<div className="contact-us__contact__office__address__phone">
							<p>+918080605001 +919702327707 +918356038324</p>
						</div>
					</div>

					<div className="contact-us__contact__office__timing">
						<span>
							<p className="contact-us__contact__office__timing__day">
								Monday to Saturday:
							</p>
							<p className="contact-us__contact__office__timing__time">
								9am to 8pm
							</p>
						</span>
						<span>
							<p className="contact-us__contact__office__timing__day">
								Sunday:
							</p>
							<p className="contact-us__contact__office__timing__time">
								10am to 5pm
							</p>
						</span>
					</div>
				</div>
			</div>

			<div className="contact-us__grid">
				<div className="contact-us__grid__form-container">
					<p>Let us know your requirements!</p>
					<ContactUsForm className="contact-us__grid__form-container__form" />
				</div>
				<div className="contact-us__grid__facebook">
					<p>Feel free to give us a like on Facebook!</p>
					<iframe
						src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSecurBotOfficial%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
						width="500"
						height="500"
						//style="border:none;overflow:hidden"
						scrolling="no"
						frameBorder="0"
						allowtransparency="true"
						allow="encrypted-media"
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default withRouter(ContactUs);
