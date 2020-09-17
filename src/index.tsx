import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import KingOfNewYork from "./pages/KingOfNewYork";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import StarRealms from "./pages/StarRealms";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path={process.env.PUBLIC_URL + "/star-realms"}>
          <StarRealms />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/king-of-new-york"}>
          <KingOfNewYork />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/"}>
          <Home />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
