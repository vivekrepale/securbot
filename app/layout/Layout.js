import React from "react";
import { Link, Route, Switch, HashRouter as Router } from "react-router-dom";

//Components
import HeaderLogo from "./HeaderLogo";
import Header from "./Header";
import Footer from "./Footer";
import NavBar2 from "./NavBar2.js";
import Footer2 from "./Footer2";
//import NavBar from "./NavBar.js";
import Practice from "../components/Practice";

import Home from "../components/Home.js";
import AboutUs from "../components/AboutUs.js";
import ContactUs from "../components/ContactUs.js";
import Products from "../components/Products.js";
import Testimonials from "../components/Testimonials.js";
import S_and_S from "../components/S_and_S.js";

const Layout = () => {
	return (
		<Router>
			<div className="layout__navbar">
				<NavBar2 />
			</div>
			<div className="header-logo">
				<HeaderLogo />
			</div>
			<div className="layout">
				<div className="layout__header-main">
					<Header />
				</div>

				<div className="layout__content">
					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>

						<Route path="/about-us">
							<AboutUs />
						</Route>

						<Route path="/services-and-solutions">
							<S_and_S />
						</Route>

						<Route path="/products">
							<Products />
						</Route>

						<Route path="/testimonials">
							<Testimonials />
						</Route>

						<Route path="/contact-us">
							<ContactUs />
						</Route>
					</Switch>
				</div>

				<div className="layout__footer">
					<Footer2 />
				</div>
			</div>
		</Router>
	);
};

export default Layout;
