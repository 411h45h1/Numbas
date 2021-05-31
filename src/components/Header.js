import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../core/context/appContext";

const Header = () => {
  const state = useContext(AppContext);
  const { loggedIn, onLogout } = state;

  const LogoutButton = () => {
    return loggedIn === true ? (
      <button onClick={() => onLogout()}>Logout</button>
    ) : (
      <Link to="/Login-Register" className="links">
        <button>Login/Register</button>
      </Link>
    );
  };

  return (
    <header>
      <h1>Numbas</h1>

      <div className="nav">
        <LogoutButton />

        <Link to="/" className="links">
          <button>Home</button>
        </Link>
        {loggedIn && (
          <Link to="/Charts" className="links">
            <button>Chart</button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
