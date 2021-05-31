import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../core/context/appContext";

const Header = (props) => {
  const LogoutButton = () => {
    const state = useContext(AppContext);
    const { loggedIn, onLogout } = state;
    return loggedIn === true ? (
      <button onClick={() => onLogout()}>Logout</button>
    ) : (
      <Link to="/Login-Register" className="links">
        <button>Sign Up</button>
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
        <Link to="/Charts" className="links">
          <button>Chart</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
