import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './Router';
import Auth0ProviderWithConfig from './auth0-provider';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0ProviderWithConfig>
      <Router />
    </Auth0ProviderWithConfig>
  </React.StrictMode>
);
