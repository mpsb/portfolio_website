import React, { useState } from "react";

function Login(props) {
  const username = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // handle button click of login form
  const handleLogin = () => {
    props.history.push("/dashboard");
  };

  return (
    <section id="login">
      <div className="row">
        <div className="twelve columns main-col">
          <h2>Login</h2>
        </div>
      </div>
      <div className="row">
        <div className="twelve columns main-col">
          <form>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                {...username}
                autoComplete="new-password"
                className="form-control"
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                {...password}
                autoComplete="new-password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <input
              type="button"
              value={loading ? "Loading..." : "Login"}
              onClick={handleLogin}
              disabled={loading}
              className="btn btn-primary btn-block"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  }
}

export default Login;