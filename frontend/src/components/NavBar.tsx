import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const NavBar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/pokeball.png" alt="Pokeball" width="30" height="30" className="d-inline-block align-text-top" />
          PokéApp
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catch-pokemon">Catch Pokemon</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <span className="nav-link">{user.name}</span>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={() => logout({ returnTo: window.location.origin })}>
                    Log Out
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={loginWithRedirect}>
                  Log In
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
