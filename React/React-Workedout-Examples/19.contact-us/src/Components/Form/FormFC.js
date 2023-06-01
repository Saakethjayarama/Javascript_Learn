import React, { useState } from "react";
import Axios from "axios";

function FormFC() {
  const [state, setState] = useState({
    fname: "",
    email: "",
    phone: "",
    message: "",
    result: "",
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    Axios.post("http://localhost/addContact.php", {
      ...state,
      dbName: "institution",
    }).then(() => {
      setState({
        ...state,
        result: "Submitted successfully!",
      });
    });
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        Name:{" "}
        <input
          type="text"
          name="fname"
          onChange={handleChange}
          value={state.fname}
        />
        <br />
        <br />
        Email:{" "}
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={state.email}
        />
        <br />
        <br />
        Phone Number:{" "}
        <input
          type="text"
          name="phone"
          onChange={handleChange}
          value={state.phone}
        />{" "}
        <br />
        <br />
        Message:{" "}
        <textarea
          name="message"
          cols="30"
          rows="2"
          onChange={handleChange}
          value={state.message}
        ></textarea>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
      {state.result}
    </div>
  );
}

export default FormFC;
