import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserProfile from "../src/pages/UserProfile";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={UserProfile} />
      </Switch>
    </BrowserRouter>
  );
}
