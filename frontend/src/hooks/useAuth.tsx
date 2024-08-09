import { useAuth0 } from '@auth0/auth0-react';

const useAuth = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user,
  };
};

export default useAuth;
