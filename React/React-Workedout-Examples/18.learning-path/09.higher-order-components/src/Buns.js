import React from "react";
import withCount from "./withCount";

function Buns({ handleClick, count }) {
  return (
    <div>
      {count} Buns brought till now.
      <br />
      <button onClick={handleClick}>Buy Bun</button>
    </div>
  );
}

export default withCount(Buns);
