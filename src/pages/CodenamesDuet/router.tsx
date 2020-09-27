import React from "react";
import { Route, Switch } from "react-router-dom";
import CodenamesDuet from "./Game";
import KeyCard from "./KeyCard";
import Home from "./";

export default function CodenamesRouter() {
  return (
    <>
      <Route path={"/codenames-duet/keycard/:version"}>
        <KeyCard />
      </Route>
      <Route path={"/codenames-duet/game/:language/:version"}>
        <CodenamesDuet />
      </Route>
      <Route exact path={"/codenames-duet"}>
        <Home />
      </Route>
    </>
  );
}
