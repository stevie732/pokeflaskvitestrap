import  { ReactNode } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

interface Auth0ProviderWithConfigProps {
  children: ReactNode;
}

const Auth0ProviderWithConfig = ({ children }: Auth0ProviderWithConfigProps) => {
  const domain = 'dev-tx5tg8hjtjlgjnns.us.auth0.com';
  const clientId = 'FZm1SWmWpy5Qya7jRoMOXHeVhtzrOXVc';
  const redirectUri = window.location.origin || 'http://localhost:3000';

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithConfig;
