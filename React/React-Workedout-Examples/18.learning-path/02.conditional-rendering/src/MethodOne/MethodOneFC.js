import React, { useState } from "react";

function MethodOneFunction() {
  const [state, setState] = useState({
    isLoggedIn: false,
  });

  if (state.isLoggedIn) {
    return <div>Logged In!</div>;
  } else {
    return <div>Not LoggedIn!</div>;
  }
}

export default MethodOneFunction;
