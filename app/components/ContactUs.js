import React from "react";
import { withRouter } from "react-router-dom";

const ContactUs = () => {
	return (
		<div className="googleMap">
			<iframe
				className="googleMap__map"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7998357388406!2d73.01596951442907!3d19.072536287089903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c16a8a799c07%3A0x4aea4241a7557ac4!2sSiddharth%20Enterprises!5e0!3m2!1sen!2sin!4v1594566494689!5m2!1sen!2sin"
				frameBorder="0"
				allowFullScreen=""
				aria-hidden="false"
				tabIndex="0"
				//https://www.reddit.com/r/firefox/comments/fpptyj/firefox_content_security_policy_console_output/
				//content-security-policy="object-src 'none';base-uri 'self';script-src 'nonce-xGcH8cULpuwtFbXcC3cvKQ==' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/geo-maps-api/1"
			></iframe>
		</div>
	);
};

export default withRouter(ContactUs);
