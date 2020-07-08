import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import S_and_S from "./components/S_and_S";

//import Layout from "./components/Layout.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

//import "./main.css";
import "./sass/main.scss";

//Components

ReactDOM.render(
	<BrowserRouter>
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

			<div className="container__footer">
				<Footer />
			</div>
		</div>
	</BrowserRouter>,
	document.getElementById("app")
);

if (module.hot) {
	module.hot.accept();
}
