import React from 'react';
import { Route, Redirect } from 'react-router-dom';


function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("amplify-signin-with-hostedUI");
  console.log("this", !!isAuthenticated);

  return (
    !!isAuthenticated ? <Route component={Component} to="/" /> : <Redirect to="/" />
  );
}

export default ProtectedRoute;