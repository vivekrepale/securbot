import React from "react";
import ReactDOM from "react-dom";

import "./main.css";

const Header = () => {
  return (
    <div>
      <h1>Finally we are live.</h1>
      Hello from react!!
    </div>
  );
};

ReactDOM.render(<Header />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
