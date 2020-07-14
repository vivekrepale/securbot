import React from "react";
import { Link, withRouter } from "react-router-dom";

const NavList = (props) => {
	return (
		<div>
			<div className="navigation__nav__background">&nbsp;</div>
			<div className="navigation__nav">
				<ul className="navigation__nav__list">
					<li className="navigation__nav__list__item">
						<Link
							onClick={props.toggleDisplayNavList}
							to="/"
							className="navigation__nav__list__item__link heading-3"
						>
							Home
						</Link>
					</li>

					<li className="navigation__nav__list__item">
						<Link
							onClick={props.toggleDisplayNavList}
							to="/about-us"
							className="navigation__nav__list__item__link heading-3"
						>
							About us
						</Link>
					</li>

					<li className="navigation__nav__list__item">
						<Link
							onClick={props.toggleDisplayNavList}
							to="/services-and-solutions"
							className="navigation__nav__list__item__link heading-3"
						>
							Solutions and services
						</Link>
					</li>

					<li className="navigation__nav__list__item">
						<Link
							onClick={props.toggleDisplayNavList}
							to="/products"
							className="navigation__nav__list__item__link heading-3"
						>
							Products
						</Link>
					</li>

					<li className="navigation__nav__list__item">
						<Link
							onClick={props.toggleDisplayNavList}
							to="/testimonials"
							className="navigation__nav__list__item__link heading-3"
						>
							Testimonials
						</Link>
					</li>

					<li className="navigation__nav__list__item">
						<Link
							onClick={props.toggleDisplayNavList}
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

export default withRouter(NavList);
