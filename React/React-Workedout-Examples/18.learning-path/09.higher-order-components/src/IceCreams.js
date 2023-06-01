import React from "react";
import withCount from "./withCount";

function IceCreams({ count, handleClick }) {
  return (
    <div>
      {count} Icecreams brought till now.
      <br />
      <button onClick={handleClick}>Buy Ice Creams</button>
    </div>
  );
}

export default withCount(IceCreams);
