import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserProfile from "../src/pages/UserProfile";
import Repos from "./pages/Repos";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={UserProfile} />
        <Route path="/repos" component={Repos} />
      </Switch>
    </BrowserRouter>
  );
}
