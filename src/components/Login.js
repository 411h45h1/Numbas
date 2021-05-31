import React, { useContext, useEffect, useState } from "react";
import { emailValidator, passwordValidator } from "../core/utils";
import { loginUser } from "../core/api/auth";
import { useHistory } from "react-router";
import AppContext from "../core/context/appContext";

const Login = () => {
  const history = useHistory();
  const state = useContext(AppContext);
  const { loggedIn } = state;
  useEffect(() => {
    if (loggedIn === true) {
      history.push("/");
    }
  }, [history, loggedIn]);
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  //const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();

    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
    }

    // setLoading(true);

    const response = await loginUser({
      email: email.value,
      password: password.value,
    });

    if (response.error) {
      setError(response.error);
      console.log(response.error);
      // setLoading(false);
    } else {
      history.push("/");
    }
  };

  const clearInputs = () => {
    setEmail({ value: "", error: "" });
    setPassword({ value: "", error: "" });
    setTimeout(() => setError(null), 500);
  };

  if (error && email.value !== "" && password.value !== "") {
    clearInputs();
  }

  return (
    <div>
      <div>
        <form autoComplete="on">
          <input
            type="email"
            value={email.value}
            placeholder="Email"
            onChange={(e) => setEmail({ value: e.target.value, error: "" })}
          />
          <input
            type="password"
            value={password.value}
            placeholder="Password"
            onChange={(e) => setPassword({ value: e.target.value, error: "" })}
          />
          <button
            type="submit"
            onClick={(e) => handleLogin(e)}
            style={{ marginTop: 10 }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
