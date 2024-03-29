import React from "react";
import { Route } from "react-router-dom";
import Codenames from "./Game";
import KeyCard from "./KeyCard";
import Home from ".";

export default function CodenamesRouter() {
  return (
    <>
      <Route path={"/codenames/keycard/:version/:preset?"}>
        <KeyCard />
      </Route>
      <Route path={"/codenames/game/:version/:language/:cardset/:data?"}>
        <Codenames />
      </Route>
      <Route exact path={"/codenames"}>
        <Home />
      </Route>
    </>
  );
}
