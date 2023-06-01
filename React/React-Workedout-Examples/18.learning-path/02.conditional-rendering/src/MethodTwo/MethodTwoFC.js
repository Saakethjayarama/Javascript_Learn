import React, { useState } from "react";

function MethodTwoFC() {
  const [state, setState] = useState({
    isLoggedIn: true,
  });

  return (
    <>
      {state.isLoggedIn ? (
        <div>{"Logged In!"}</div>
      ) : (
        <div>{"Not logged In!"}</div>
      )}
    </>
  );
}

export default MethodTwoFC;
