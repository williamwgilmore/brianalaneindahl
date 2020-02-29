import React from "react";
import { Switch, Route } from "react-router-dom";
import { Papers } from "./components/Papers";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { NotFound } from "./components/NotFound";
import { About } from "./components/About";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/papers" component={Papers} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
