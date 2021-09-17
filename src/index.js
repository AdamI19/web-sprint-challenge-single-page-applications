
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import "./styles.less";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
render(
    <Router>
        <App />
    </Router>
    , document.querySelector('#root')
);