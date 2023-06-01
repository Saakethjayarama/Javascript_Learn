import React, { useState } from "react";

function RegisterFC() {
  const [state, setState] = useState({
    fname: "",
    gender: "",
    age: "",
    email: "",
    phone: "",
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
    console.log(state);

    fetch("http://localhost/signup.php", {
      method: "POST",
      body: JSON.stringify({ ...state }),
    }).then(() => {
      setState({
        ...state,
        status: "Registration Successful!",
      });
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        Name:
        <input
          type="text"
          name="fname"
          onChange={handleChange}
          value={state.fname}
        />
        <br />
        <br />
        <input
          type="radio"
          value="M"
          name="gender"
          onChange={handleChange}
          checked={state.gender === "M"}
        />{" "}
        Male
        <input
          type="radio"
          value="F"
          name="gender"
          onChange={handleChange}
          checked={state.gender === "F"}
        />{" "}
        Female <br />
        <br /> Age:
        <input
          type="number"
          name="age"
          onChange={handleChange}
          value={state.age}
        />
        <br />
        <br />
        Email:
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={state.email}
        />
        <br />
        <br />
        Phone Number:
        <input
          type="text"
          name="phone"
          onChange={handleChange}
          value={state.phone}
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
    </>
  );
}

export default RegisterFC;
