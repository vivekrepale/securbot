import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="navigation">
			<input
				className="navigation__checkbox"
				type="checkbox"
				id="nav-toggle"
			/>

			<label className="navigation__btn" htmlFor="nav-toggle">
				<span></span>
			</label>

			<div className="navigation__background">&nbsp;</div>

			<div className="navigation__nav">
				<ul className="navigation__nav__list">
					<li className="navigation__nav__list__item">
						<Link
							to="/"
							className="navigation__nav__list__item__link heading-3"
						>
							Home
						</Link>
					</li>

					<li className="navigation__nav__list__item">
						<Link
							to="/about-us"
							className="navigation__nav__list__item__link heading-3"
						>
							About us
						</Link>
					</li>

					<li className="navigation__nav__list__item">
						<Link
							to="/services-and-solutions"
							className="navigation__nav__list__item__link heading-3"
						>
							Solutions and services
						</Link>
					</li>

					<li className="navigation__nav__list__item">
						<Link
							to="/products"
							className="navigation__nav__list__item__link heading-3"
						>
							Products
						</Link>
					</li>

					<li className="navigation__nav__list__item">
						<Link
							to="/testimonials"
							className="navigation__nav__list__item__link heading-3"
						>
							Testimonials
						</Link>
					</li>

					<li className="navigation__nav__list__item">
						<Link
							to="/contact-us"
							className="navigation__nav__list__item__link heading-3"
						>
							Contact us
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
