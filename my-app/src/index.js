import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router";

ReactDOM.render(
  <Router>
    <Switch>
      <App />
    </Switch>
  </Router>,
  document.getElementById("root")
);
