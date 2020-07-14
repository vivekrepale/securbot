import React from "react";
import { withRouter } from "react-router-dom";
import SvgLocation from "../components/svg/location.js";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__offices">
				<div className="footer__offices__office">
					<div className="footer__offices__office__googleMap">
						<iframe
							className="footer__offices__office__googleMap__map"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7998357388406!2d73.01596951442907!3d19.072536287089903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c16a8a799c07%3A0x4aea4241a7557ac4!2sSiddharth%20Enterprises!5e0!3m2!1sen!2sin!4v1594566494689!5m2!1sen!2sin"
							// width="600"
							// height="450"
							frameBorder="0"
							allowFullScreen=""
							aria-hidden="false"
							tabIndex="0"
							//https://www.reddit.com/r/firefox/comments/fpptyj/firefox_content_security_policy_console_output/
							//content-security-policy="object-src 'none';base-uri 'self';script-src 'nonce-xGcH8cULpuwtFbXcC3cvKQ==' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/geo-maps-api/1"
						></iframe>
					</div>
					<div className="footer__offices__office__info ">
						<h4 className="footer__offices__office__info__location heading-4 heading-4--white ">
							Mumbai (Head-office)
						</h4>
						<p className="footer__offices__office__info__address normalText--white">
							SHOP No. 01, PLOT No. 112, Opp. BOMBAY PAINTS,
							SECTOR - 23, JANTA MARKET, TURBHE STN RD, TURBHE,
							NAVI MUMBAI, MAHARASHTRA. 400705
						</p>
						<div className="footer__offices__office__info__contact normalText--white">
							<p>+91 8080605001</p>
							<p>+91 9702327707</p>
							<p>+91 8356038324</p>
						</div>
					</div>
				</div>
				<div className="footer__offices__office">
					<div className="footer__offices__office__info ">
						<div className="footer__phone-call-link"></div>

						<h4 className="footer__offices__office__info__location heading-4 heading-4--white ">
							Punjab
						</h4>
						<p className="footer__offices__office__info__address normalText--white">
							1743/5, W. No.- 43, B-14, ISLAM GANJ, LUDHIANA.
							PUNJAB. 141008
						</p>
						<div className="footer__offices__office__info__contact normalText--white">
							<p>+91 8054963957</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default withRouter(Footer);
