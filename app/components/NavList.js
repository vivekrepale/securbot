import React from "react";
import { Link, withRouter } from "react-router-dom";

const NavList = (props) => {
	return (
		<div className="navigation">
			<div className="navigation__background">&nbsp;</div>
			<div className="navigation__nav">
				<ul className="navigation__nav__list">
					<li className="navigation__nav__list__item">
						<Link
							onClick={props.toggleDisplayNavList}
							to="/"
							className="navigation__nav__list__item__link text-4"
						>
							Home
						</Link>
					</li>

					<li className="navigation__nav__list__item">
						<Link
							onClick={props.toggleDisplayNavList}
							to="/about-us"
							className="navigation__nav__list__item__link text-4"
						>
							About us
						</Link>
					</li>

					<li className="navigation__nav__list__item">
						<Link
							onClick={props.toggleDisplayNavList}
							to="/services-and-solutions"
							className="navigation__nav__list__item__link text-4"
						>
							Solutions and services
						</Link>
					</li>

					<li className="navigation__nav__list__item">
						<Link
							onClick={props.toggleDisplayNavList}
							to="/products"
							className="navigation__nav__list__item__link text-4"
						>
							Products
						</Link>
					</li>

					<li className="navigation__nav__list__item">
						<Link
							onClick={props.toggleDisplayNavList}
							to="/testimonials"
							className="navigation__nav__list__item__link text-4"
						>
							Testimonials
						</Link>
					</li>

					<li className="navigation__nav__list__item">
						<Link
							onClick={props.toggleDisplayNavList}
							to="/contact-us"
							className="navigation__nav__list__item__link text-4"
						>
							Contact us
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default withRouter(NavList);
