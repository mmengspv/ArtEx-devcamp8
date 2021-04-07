import React from 'react'

import { Route, Switch, useRouteMatch } from "react-router-dom";
import VotingImage from "../VotingImage";
import VotingImageSelected from "../VotingImageSelected";

export function EventRoute() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.path + "/:eventId"}>
        <VotingImage />
      </Route>
      <Route path={match.path + "/selected/:eventId"}>
        <VotingImageSelected />
      </Route>
    </Switch>
  );
}