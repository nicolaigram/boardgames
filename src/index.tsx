import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import KingOfNewYork from "./pages/KingOfNewYork";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import StarRealms from "./pages/StarRealms";
import Munchkin from "./pages/Munchkin";
import ForSale from "./pages/ForSale";
import CodenamesRouter from "./pages/Codenames/router";
import GenericCardGame from "./pages/GenericCardGame";

ReactDOM.render(
  <React.StrictMode>
    <GenericCardGame />
    {/* <Router basename={process.env.PUBLIC_URL}>
      <CodenamesRouter />
      <Route path={"/for-sale"}>
        <ForSale />
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
      <Route exact path={"/"}>
        <Home />
      </Route>
    </Router> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
