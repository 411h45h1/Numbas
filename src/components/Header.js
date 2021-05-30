import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Numbas</h1>

      <div className="nav">
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
