import React, { useState } from "react";

function MethodThreeFC() {
  const [state, setState] = useState({
    isLoggedIn: true,
  });

  return state.isLoggedIn && <div>Logged In</div>;
}

export default MethodThreeFC;
