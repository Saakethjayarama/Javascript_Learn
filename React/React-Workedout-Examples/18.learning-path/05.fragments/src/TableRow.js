import React from "react";

export default function TableRow() {
  return (
    (
      <React.Fragment>
        <td>John</td>
        <td>john.cclub@gmail.com</td>
      </React.Fragment>
    ) || (
      <>
        <td>John</td>
        <td>john.cclub@gmail.com</td>
      </>
    )
  );
}
