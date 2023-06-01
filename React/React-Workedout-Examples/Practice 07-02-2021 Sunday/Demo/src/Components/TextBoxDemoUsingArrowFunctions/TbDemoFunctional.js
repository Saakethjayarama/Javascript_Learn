import React, { useState } from "react";

function TbDemoFunctional() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setResult("Welcome, " + name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={name} />
        <input type="submit" value="Submit" />
      </form>
      {result}
    </div>
  );
}

export default TbDemoFunctional;
