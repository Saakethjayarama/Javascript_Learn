import React from "react";
import TableRow from "./TableRow";

/**
 * * Fragments lets you group children elements without adding extra node to the DOM
 */
function App() {
  return (
    <div className="App">
      <table border="1">
        <tbody>
          <tr>
            <TableRow />
          </tr>
          <tr>
            <TableRow />
          </tr>
          <tr>
            <TableRow />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
