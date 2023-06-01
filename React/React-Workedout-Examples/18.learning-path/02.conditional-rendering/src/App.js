import React from "react";

import { MethodOneCC, MethodOneFC } from "./MethodOne";
import MethodTwoCC from "./MethodTwo/MethodTwoCC";
import MethodTwoFC from "./MethodTwo/MethodTwoFC";
import { MethodThreeCC, MethodThreeFC } from "./MethodThree";

function App() {
  return (
    <>
      <MethodTwoCC />
    </>
  );
}

export default App;
