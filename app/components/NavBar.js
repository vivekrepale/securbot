import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="nav">
			<Router>
				<ul className="nav__nav-list">
					<li className="nav__nav-list__nav-item">
						<Link
							to="/"
							className="nav__nav-list__nav-item__nav-link"
						>
							Home
						</Link>
					</li>

					<li className="nav__nav-list__nav-item">
						<Link
							to="/about-us"
							className="nav__nav-list__nav-item__nav-link"
						>
							About us
						</Link>
					</li>

					<li className="nav__nav-list__nav-item">
						<Link
							to="/services-and-solutions"
							className="nav__nav-list__nav-item__nav-link"
						>
							Solutions and services
						</Link>
					</li>

					<li className="nav__nav-list__nav-item">
						<Link
							to="/products"
							className="nav__nav-list__nav-item__nav-link"
						>
							Products
						</Link>
					</li>

					<li className="nav__nav-list__nav-item">
						<Link
							to="/testimonials"
							className="nav__nav-list__nav-item__nav-link"
						>
							Testimonials
						</Link>
					</li>

					<li className="nav__nav-list__nav-item">
						<Link
							to="/contact-us"
							className="nav__nav-list__nav-item__nav-link"
						>
							Contact us
						</Link>
					</li>
				</ul>
			</Router>
		</div>
	);
};

export default NavBar;
