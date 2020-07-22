import React from "react";
import ReactDOM from "react-dom";
import { Link, Route, Switch, HashRouter as Router } from "react-router-dom";

import Layout from "./layout/Layout.js";

import "./sass/main.scss";

ReactDOM.render(<Layout />, document.getElementById("app"));

if (module.hot) {
	module.hot.accept();
}
