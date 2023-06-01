import React, { useEffect, useState } from "react";
import MemoEx from "./MemoEx";

function Parent() {
  const [state, setState] = useState("00");
  useEffect(() => {
    setTimeout(() => {
      const dt = new Date();
      setState({
        sec: "00",
      });
    }, 2000);
  });

  console.log("Parent.js");
  return (
    <div>
      <MemoEx sec={state.sec} />
    </div>
  );
}

export default Parent;
