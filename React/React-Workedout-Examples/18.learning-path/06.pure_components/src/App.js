import Comp from "./Comp";
import PureComp from "./PureComp";

import React, { useState, useEffect } from "react";

function App() {
  const [state, setState] = useState("00");
  useEffect(() => {
    setTimeout(() => {
      const dt = new Date();
      setState({
        sec: "00",
      });
    }, 2000);
  });
  return (
    <div className="App">
      <Comp sec={state.sec} />
      <PureComp sec={state.sec} />
    </div>
  );
}

export default App;
