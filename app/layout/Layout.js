import React from "react";
import { Link, Route, Switch, HashRouter as Router } from "react-router-dom";

//Components
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar.js";

import Home from "../components/Home.js";
import AboutUs from "../components/AboutUs.js";
import ContactUs from "../components/ContactUs.js";
import Products from "../components/Products.js";
import Testimonials from "../components/Testimonials.js";
import S_and_S from "../components/S_and_S.js";

const Layout = () => {
	return (
		<Router>
			<div className="layout">
				<div className="layout__navbar">
					<NavBar />
				</div>
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
					<Footer />
				</div>
			</div>
		</Router>
	);
};

export default Layout;
