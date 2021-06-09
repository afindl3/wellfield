import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' />
        <Route exact path='/seamless' />
        <Route exact path='/moneyclip' />
        <Route exact path='/about' />
        <Route exact path='/contact' />
        <Route exact path='/terms' />
        <Route exact path='/privacy' />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;