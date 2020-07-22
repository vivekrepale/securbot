import React from "react";
import { Link, Route, Switch, HashRouter as Router } from "react-router-dom";

//Components
import HeaderLogo from "./HeaderLogo";
import Header from "./Header";
import NavBar from "./NavBar.js";
import Footer from "./Footer";
import Practice from "../components/Practice";

import Home from "../components/Home.js";
import AboutUs from "../components/AboutUs.js";
import ContactUs from "../components/ContactUs.js";
import Products from "../components/Products.js";
import Testimonials from "../components/Testimonials.js";
import S_and_S from "../components/S_and_S.js";
import SocialHook from "../components/socialHook.js";
import Admin from "../components/Admin.js";

const Layout = () => {
	return (
		<Router>
			<div className="social-hook-container">
				<SocialHook />
			</div>
			<div className="layout__navbar">
				<NavBar />
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
						<Route path="/admin">
							<Admin />
						</Route>
					</Switch>
				</div>

				<div className="layout__footer">
					<Footer />
				</div>
			</div>
		</Router>
	);
};

export default Layout;
