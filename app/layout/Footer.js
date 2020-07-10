import React from "react";
import { withRouter } from "react-router-dom";

//importing images path
import govLogo1 from "../assets/images/indiamartLogo.png";
import govLogo2 from "../assets/images/atmaNirbharBharatLogo.png";
import govLogo3 from "../assets/images/digitalIndiaLogo.png";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__gov-logos">
				<div className="footer__gov-logos__logo1">
					<h3 className="heading-3 heading-3--white">We are </h3>
					<img
						src={govLogo1}
						alt="indiaMartLogo"
						className="footer__gov-logos__logo"
					/>
					<h3 className="heading-1 heading-1--white">verified.</h3>
				</div>
				<img
					src={govLogo3}
					alt="digitalIndiaLogo"
					className="footer__gov-logos__logo3"
				/>
				<img
					src={govLogo2}
					alt="atmaNirbharBharatLogo"
					className="footer__gov-logos__logo2"
				/>
			</div>
			<div className="footer__offices">
				<div className="footer__offices__heading ">
					<h3 className="heading-3 heading-3--white">Offices:</h3>
				</div>
				<div className="footer__offices__office office1">
					<h4 className="footer__offices__office__location heading-4 heading-4--white ">
						Mumbai (Head-office)
					</h4>
					<p className="footer__offices__office__address">
						SHOP No. 01, PLOT No. 112, Opp. BOMBAY PAINTS, SECTOR -
						23, JANTA MARKET, TURBHE STN RD, TURBHE, NAVI MUMBAI,
						MAHARASHTRA. 400705
					</p>
					<div className="footer__offices__office__contact">
						<p>+91 8080605001</p>
						<p>+91 9702327707</p>
						<p>+91 8356038324</p>
					</div>
				</div>

				<div className="footer__offices__office office2">
					<h4 className="footer__offices__office__location heading-4 heading-4--white">
						Punjab
					</h4>
					<p className="footer__offices__office__address">
						1743/5, W. No.- 43, B-14, ISLAM GANJ, LUDHIANA. PUNJAB.
						141008
					</p>
					<div className="footer__offices__office__contact">
						<p>+91 8054963957</p>
					</div>
				</div>
			</div>
			<div className="footer__offices__copyright">
				<p>© 2020 by Siddharth Enterprises.</p>
			</div>
			<div className="footer__developers-info">
				<h5>Developed by: Vivek Repale</h5>
			</div>
		</footer>
	);
};

export default withRouter(Footer);
