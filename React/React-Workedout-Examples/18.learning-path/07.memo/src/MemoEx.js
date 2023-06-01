import React from "react";

function MemoEx(props) {
  console.log("MemoEx");
  return <div>Memo Component {props.sec}</div>;
}

export default React.memo(MemoEx);
