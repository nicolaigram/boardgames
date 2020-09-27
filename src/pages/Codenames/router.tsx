import React from "react";
import { Route, Switch } from "react-router-dom";
import Codenames from "./Game";
import KeyCard from "./KeyCard";
import Home from ".";

export default function CodenamesRouter() {
  return (
    <>
      <Route path={"/codenames/keycard/:version"}>
        <KeyCard />
      </Route>
      <Route path={"/codenames/game/:version/:language/:cardset"}>
        <Codenames />
      </Route>
      <Route exact path={"/codenames"}>
        <Home />
      </Route>
    </>
  );
}
