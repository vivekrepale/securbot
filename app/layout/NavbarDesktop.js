import React from "react";
import { Link, withRouter } from "react-router-dom";

const NavbarDesktop = (props) => {
	return (
		<div>
			<div className="navbar">
				<Link to="/" className="navbar__link text-4">
					Home
				</Link>

				<Link to="/about-us" className="navbar__link text-4">
					About us
				</Link>

				<Link
					to="/services-and-solutions"
					className="navbar__link text-4"
				>
					Solutions and services
				</Link>

				<Link to="/products" className="navbar__link text-4">
					Products
				</Link>

				<Link to="/testimonials" className="navbar__link text-4">
					Testimonials
				</Link>

				<Link to="/contact-us" className="navbar__link text-4">
					Contact us
				</Link>
			</div>
		</div>
	);
};

export default withRouter(NavbarDesktop);
