import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SignIn, Register } from './components/';

const Routes = () => {

  const isLoggedIn  = false

  return (
    <Switch>
      {/* Routes placed here are available to all visitors */}
      <Route exact path= '/'  />
      <Route exact path="/signin" component={SignIn}/>
      <Route exact path="/register" component={Register} />
      {isLoggedIn && (
        <Switch>
          {/* Routes placed here are only available after logging in */}
        </Switch>
      )}
    </Switch>
  )
}

export default Routes;


