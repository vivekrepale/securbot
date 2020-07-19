import React from "react";
import { withRouter } from "react-router-dom";

import IndianFlag from "../assets/images/f_flag.jpeg";
import IndiaMart from "../assets/images/f_indiaMart.png";
import DigitalIndia from "../assets/images/f_digitalIndia.png";
import AtmanirbharBharat from "../assets/images/f_atmanirbhar.jpeg";

import SvgLocation from "../components/svg/location2.js";

const Footer = () => {
	const year = new Date().getYear() - 100 + 2000;
	return (
		<footer className="footer">
			<div className="footer__flag">
				<img src={IndianFlag} alt="Indian flag" />
			</div>

			<div className="footer__goi">
				<div className="footer__goi__india-mart">
					<img src={IndiaMart} alt="india-mart" />
					<p>We are verified by Indiamart.</p>
				</div>
				<div className="footer__goi__digital-india">
					<img src={DigitalIndia} alt="digital-india" />
					<p>A Digital India initiative.</p>
				</div>
				<div className="footer__goi__atmanirbhar">
					<img src={AtmanirbharBharat} alt="atmanirbhar" />
					<p>Lets make India great again.</p>
				</div>
			</div>

			<div className="footer__offices">
				<div className="footer__offices__office footer__offices__office--1">
					<div className="footer__offices__office__info ">
						<h4 className="footer__offices__office__info__location ">
							<SvgLocation fill="red" className="f_svg" />
							Mumbai (Head-office)
						</h4>
						<p className="footer__offices__office__info__address ">
							SHOP No. 01, <p>PLOT No. 112,</p> Opp. BOMBAY
							PAINTS, SECTOR - 23,
							<p>
								{" "}
								JANTA MARKET, TURBHE STN RD, TURBHE, NAVI
								MUMBAI,
							</p>{" "}
							MAHARASHTRA. 400705
						</p>
						<div className="footer__offices__office__info__contact ">
							<p>+918080605001 +919702327707 +918356038324</p>
						</div>
					</div>
				</div>
				<div className="footer__offices__office footer__offices__office--2">
					<div className="footer__offices__office__info ">
						<div className="footer__phone-call-link"></div>

						<h4 className="footer__offices__office__info__location ">
							<SvgLocation fill="red" className="f_svg" />
							Punjab
						</h4>
						<p className="footer__offices__office__info__address ">
							1743/5,<p> W. No.- 43, B-14,</p> ISLAM GANJ,
							<p>LUDHIANA.</p>
							<p>PUNJAB. 141008</p>
						</p>
						<div className="footer__offices__office__info__contact ">
							<p>+918054963957</p>
						</div>
					</div>
				</div>
			</div>

			<div className="footer__copyright">
				<p>
					© {`${year} `} All rights reserved by Siddharth Enterprises.
				</p>
			</div>

			<div className="footer__developer">
				<p>Developed by: Vivek Repale.</p>
				<p>
					Contact:{" "}
					<a href="mailto:vivekrepale@gmail.com">
						vivekrepale@gmail.com
					</a>
				</p>
			</div>
		</footer>
	);
};

export default withRouter(Footer);
