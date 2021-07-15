import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Home from "./views/Home";
import About from "./views/About";

function router() {
  return (
    <Switch>
      <Route component={Home} path="/" exact/>
      <Route component={About} path="/About" exact/>
    </Switch>
  );
}

export default router;