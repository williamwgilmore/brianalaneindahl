import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Blog } from './components/Blog';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { NotFound } from './components/NotFound';
import { Papers } from './components/Papers';

export const App = () => {
  return (
    <div >
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/blog" component={Blog} />
        <Route path="/papers" component={Papers} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
