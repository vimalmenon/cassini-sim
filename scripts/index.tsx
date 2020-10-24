import React from "react";
import ReactDOM from "react-dom";

import {
	BrowserRouter as Router
} from "react-router-dom";

import "./styles.scss";

import Page from "./page";

ReactDOM.render(
	<Router>
		<Page />
	</Router>,
	document.getElementById("main"),
);