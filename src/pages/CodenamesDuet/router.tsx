import React from "react";
import { Route, Switch } from "react-router-dom";
import CodenamesDuet from "./Game";
import KeyCard from "./KeyCard";
import Home from "./";

export default function CodenamesRouter() {
  return (
    <>
      <Route path={"/codenames-duet/keycard"}>
        <KeyCard />
      </Route>
      <Route path={"/codenames-duet/:language/:version"}>
        <CodenamesDuet />
      </Route>
      <Route path={"/codenames-duet"}>
        <Home />
      </Route>
    </>
  );
}
