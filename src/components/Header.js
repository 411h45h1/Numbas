import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header">
      <h1>Numbas</h1>
      <Link to="/" className="links">
        <button>Home</button>
      </Link>
      <Link to="/Charts" className="links">
        <button>Chart</button>
      </Link>
    </header>
  );
};

export default Header;
