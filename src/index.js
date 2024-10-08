import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import RoutesDash from './dashboard/routes';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-as318wkb0o8ttplb.us.auth0.com"
    clientId="IJtHpteFP3j9bYW1t13naiv0tkFnAGNR"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
      <RoutesDash />
    </BrowserRouter>
  </Auth0Provider>,
);