import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

const AboutUs = () => {
	useEffect(() => {
		window.scrollTo({
			top: 400,
			behavior: "smooth",
		});
	}, []);

	return (
		<div className="about-us">
			<div className="about-us__heading">
				<div>
					<h1 className="about-us__heading__text-1">Secur</h1>
					<h1 className=" about-us__heading__text-2">Bot</h1>
				</div>
				<h4>...by Siddharth Enterprises.</h4>
			</div>
			<div className="about-us__text">
				<p>
					{" "}
					<span>Siddharth Enterprises</span>, doing business as{" "}
					<span>"SecurBot"</span>, is an Electronic Security Equipment
					Company in India founded by
					<span> Mr. Kishan J. Rathod</span> in 2015. "SecurBot" is a
					leading solution provider of electronic security and safety
					equipment in India. Our professional approach in designing
					and manufacturing systems. towards optimal Application are
					backed by latest technology, Quality & Customer Support.
					Many of the solutions have been developed from scratch in
					response to specific need of its customers.
				</p>
				<br />
				<p>
					While update details of "SecurBot" products are available on
					<span> www.securbot.in</span>, our nationwide network of
					dedicated channel partners with total commitment towards
					customer satisfaction through service support and
					competitive pricing are a phone call away. We set standards
					that other can just aspire for catering to security needs of
					modern India.{" "}
					<span>
						We offer the most comprehensive range in technologies
						advanced Security products for banks, industries,
						institutions, homes and corporates, it includes CCTV
						Cameras, IP Cameras, Wi-Fi Camera, Network Video
						Recorder, Monitors, Remote surveillance system, Wireless
						cameras, Wi-Fi GSM Home Security Alarm System- 2G, 3G,
						4G, Network/GST Network Booster, Home Automation, Fire
						Detection systems, Access Control Systems, Biometric
						Attendance Systems, Audio / Video Door Phones, Solar
						Camera, POE Switch Etc.
					</span>
				</p>

				<br />
				<p>
					We at "SecurBot" have always believed that{" "}
					<span>
						{" "}
						true commitment to quality and passion for innovation is
						always rewarded.
					</span>{" "}
					And that is why we have dedicated ourselves to bringing to
					our customer the best and the most innovative electronic
					security equipment. This passion has been appreciated by
					security specialist in India; we are fully committed to
					provide quality products backed by efficient & prompt after
					sales service. No wonder then we are leading manufacturer in
					India. On behalf of "SecurBot" I would like to thank each
					one of you - our customer, our users, and our staff members.
					You were the inspiration behind our achievements. We promise
					that we will not rest on our laurels but will continue to
					strive to live up the trust you have placed on us.
				</p>
				<br />
				<p>
					"SecurBot" takes pride in making Customized Solutions for
					specific needs of the clients. Yes, we do undertake
					customized pilot projects and turnkey project too.
				</p>
			</div>
		</div>
	);
};

export default withRouter(AboutUs);
