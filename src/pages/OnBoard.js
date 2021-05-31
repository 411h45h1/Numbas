import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const OnBoard = () => {
  const [toggleLogin, setToggleLogin] = useState(false);
  const [toggleRegister, setToggleRegister] = useState(false);

  const handleLogin = () => {
    if (toggleRegister) {
      setToggleRegister(false);
    }
    return setToggleLogin(!toggleLogin);
  };

  const handleRegister = () => {
    if (toggleLogin) {
      setToggleLogin(false);
    }
    return setToggleRegister(!toggleRegister);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleLogin()}>Login</button>
        <button onClick={() => handleRegister()}>Register</button>
        {toggleRegister && <Register />}
        {toggleLogin && <Login />}
      </div>
    </div>
  );
};

export default OnBoard;
