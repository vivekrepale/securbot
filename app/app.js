import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//import "./main.css";
import "./sass/main.scss";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";
import AboutUs from "./components/AboutUs.js";
import ContactUs from "./components/ContactUs.js";
import Products from "./components/Products.js";
import Testimonials from "./components/Testimonials.js";
import S_and_S from "./components/S_and_S.js";

ReactDOM.render(
	<BrowserRouter>
		<Header />
		<NavBar />

		<Switch>
			<Route path="/" exact>
				<Home />
			</Route>
			<Route path="/about-us">
				<AboutUs />
			</Route>
			<Route path="/services-and-solutions" exact>
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

		<Footer />
	</BrowserRouter>,
	document.getElementById("app")
);

if (module.hot) {
	module.hot.accept();
}
