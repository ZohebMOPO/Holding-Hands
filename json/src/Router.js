import React from "react";
import Users from "./Users";
import Vol from "./Vol";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function Router() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/volunteers" exact component={Vol} />
          <Route path="/users" exact component={Users} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Router;
