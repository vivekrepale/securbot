import React from "react";
import { withRouter } from "react-router-dom";

//importing images path
import govLogo1 from "../assets/images/indiaMartLogo.png";
import govLogo2 from "../assets/images/atmaNirbharBharatLogo.jpg";
import govLogo3 from "../assets/images/digitalIndiaLogo.jpg";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__gov-logos">
				<img
					src={govLogo1}
					alt="indiaMartLogo"
					className="footer__gov-logos__logo1"
				/>
				<img
					src={govLogo2}
					alt="atmaNirbharBharatLogo"
					className="footer__gov-logos__logo2"
				/>
				<img
					src={govLogo3}
					alt="digitalIndiaLogo"
					className="footer__gov-logos__logo3"
				/>
			</div>
			<div className="footer__office">
				<div className="footer__office__heading">
					<h3>Offices:</h3>
				</div>
				<div className="footer__office__office1">
					<h4 className="footer__office__office1__location">
						Mumbai (Head-office)
					</h4>
					<p className="footer__office__office1__address">
						SHOP No. 01, PLOT No. 112, Opp. BOMBAY PAINTS, SECTOR -
						23, JANTA MARKET, TURBHE STN RD, TURBHE, NAVI MUMBAI,
						MAHARASHTRA. 400705
					</p>
					<p className="footer__office__office1_contact">
						+91 8080605001 | +91 9702327707 | +91 8356038324
					</p>
				</div>

				<div className="footer__office__office2">
					<h4 className="footer__office__office2__location">
						Punjab
					</h4>
					<p className="footer__office__office2__address">
						1743/5, W. No.- 43, B-14, ISLAM GANJ, LUDHIANA. PUNJAB.
						141008
					</p>
					<p className="footer__office__office2_contact">
						+918054963957
					</p>
				</div>
			</div>
			<div className="footer__developers-info">
				<h5>Developed by: Vivek Repale</h5>
			</div>
		</footer>
	);
};

export default withRouter(Footer);
