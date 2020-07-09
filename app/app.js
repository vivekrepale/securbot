import React from "react";
import ReactDOM from "react-dom";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

// import Home from "./components/Home";
// import AboutUs from "./components/AboutUs";
// import ContactUs from "./components/ContactUs";
// import Products from "./components/Products";
// import Testimonials from "./components/Testimonials";
// import S_and_S from "./components/S_and_S";

import Layout from "./layout/Layout.js";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
//import NavBar from "./components/NavBar";

//import Link1 from "./components/Link1";

//import "./main.css";
//

import "./sass/main.scss";

//Components

ReactDOM.render(<Layout />, document.getElementById("app"));

if (module.hot) {
	module.hot.accept();
}
