import React from "react";

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
		<div className="container">
			<div className="container__navbar">
				<NavBar />
			</div>
			<div className="container__header-main">
				<Header />
			</div>
			<div className="container__header-about">Header about</div>
			<BrowserRouter>
				<Switch>
					<div className="container__content">
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
					</div>
				</Switch>
			</BrowserRouter>
			<div className="container__footer">
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
