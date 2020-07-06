import React from "react";
import ReactDOM from "react-dom";

import "./main.css";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.render(
  <div>
    <Header />
    <Footer />
  </div>,
  document.getElementById("app")
);

if (module.hot) {
  module.hot.accept();
}
