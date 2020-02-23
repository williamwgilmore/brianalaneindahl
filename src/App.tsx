import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Blog } from './components/Blog';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { NotFound } from './components/NotFound';
import { About } from './components/About';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/blog" component={Blog} />
        <Route path="/papers" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
