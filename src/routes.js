import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Update from "./pages/Update";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={Register} />
        <Route path="/update/:user_id" component={Update} />
      </Switch>
    </BrowserRouter>
  );
}
