import React, { useState } from "react";
import { emailValidator, passwordValidator } from "../core/utils";
import { signInUser } from "../core/api/auth";

const Register = () => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  //  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const handleSignUp = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ email: "", error: emailError });
      setPassword({ password: "", error: passwordError });
    }

    //  setLoading(true);

    const response = await signInUser({
      email: email.value,
      password: password.value,
    });

    if (response.error) {
      setError(response.error);
      //  setLoading(false);
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
        <form autoComplete="off">
          <label>
            Email
            <input
              type="email"
              value={email.value}
              placeholder="Email"
              onChange={(e) => setEmail({ value: e.target.value, error: "" })}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password.value}
              placeholder="Password"
              onChange={(e) =>
                setPassword({ value: e.target.value, error: "" })
              }
            />
          </label>
          <button
            type="submit"
            onClick={() => {
              handleSignUp();
            }}
            style={{ marginTop: 10 }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
