import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import KingOfNewYork from "./pages/KingOfNewYork";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import StarRealms from "./pages/StarRealms";
import Munchkin from "./pages/Munchkin";
import CodenamesDuet from "./pages/CodenamesDuet";
import CodenamesDuetKeyCard from "./pages/CodenamesDuet/KeyCard";

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path={"/codenames-duet/keycard"}>
          <CodenamesDuetKeyCard />
        </Route>
        <Route path={"/codenames-duet/:language/:version"}>
          <CodenamesDuet />
        </Route>
        <Route path={"/munchkin"}>
          <Munchkin />
        </Route>
        <Route path={"/star-realms"}>
          <StarRealms />
        </Route>
        <Route path={"/king-of-new-york"}>
          <KingOfNewYork />
        </Route>
        <Route path={"/"}>
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
