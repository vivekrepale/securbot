import React from "react";
import { BroswerRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar.js";

import Home from "./Home.js";
import AboutUs from "./AboutUs.js";
import ContactUs from "./ContactUs.js";
import Products from "./Products.js";
import Testimonials from "./Testimonials.js";
import S_and_S from "./S_and_S.js";

const Layout = () => {
	return (
		<Router>
			<div className="container">
				<div className="container__navbar">
					<NavBar />
				</div>
				<div className="container__header-main">
					<Header />
				</div>
				<div className="container__header-about">Header about</div>

				<div className="container__content">
					<Switch>
						<Route path="/" exact>
							<div>Say Hi</div>
						</Route>

						<Route path="/about-us">
							<div>Say Hie</div>
						</Route>

						<Route path="/services-and-solutions">
							<div>Say Hig</div>
						</Route>

						<Route path="/products">
							<div>Say Hib</div>
						</Route>

						<Route path="/testimonials">
							<div>Say Hin</div>
						</Route>

						<Route path="/contact-us">
							<div>Say Hiw</div>
						</Route>
					</Switch>
				</div>

				<div className="container__footer">
					<Footer />
				</div>
			</div>
		</Router>
	);
};

export default Layout;
