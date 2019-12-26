import React from "react";
import "./App.css";

import { Home } from "./pages/Home";
import Error from "./pages/Error";
import SinglePage from "./pages/SinglePage";
import { Pages } from "./pages/Pages";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Pages} />
        <Route exact path="/rooms/:slug" component={SinglePage} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
