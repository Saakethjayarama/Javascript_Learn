import React, { useState } from "react";

function LoginFC() {
  const [state, setState] = useState({
    email: "",
    password: "",
    status: "",
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost/authenticate.php", {
      method: "POST",
      body: JSON.stringify({ ...state, dbName: "institution" }),
    })
      .then(async (res) => res.json())
      .then((data) => {
        const { status } = data;
        if (status) setState({ ...state, status });
        else {
          setState({
            ...state,
            status: "Logged In!",
          });
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Email:{" "}
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={state.email}
        />
        <br />
        <br />
        Password:
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={state.password}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
      {state.status}
    </div>
  );
}

export default LoginFC;
