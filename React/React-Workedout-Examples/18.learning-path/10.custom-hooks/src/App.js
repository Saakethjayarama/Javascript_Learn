import React from "react";
import useInput from "./useInput";

function App() {
  const [name, nameBind, reset] = useInput("");
  return (
    <div className="App">
      {name}
      <br />
      <input type="text" {...nameBind} />
      <br />
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}

export default App;
