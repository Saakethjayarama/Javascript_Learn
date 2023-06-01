import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [result, setResult] = useState("");

  useEffect(() => {
    axios.get("http://localhost/test.php?number=3").then((res) => {
      setResult();
    });

    // setResult(`<table border=1>
    //   <tr>
    //     <td>Name></td>
    //     <td>age</td>
    //   </tr>
    //   <tr>
    //     <td>Saaketh></td>
    //     <td>21</td>
    //   </tr>
    // </table>`);

    // setResult(
    //   <table border={1}>
    //     <tr>
    //       <td>Name</td>
    //       <td>age</td>
    //     </tr>
    //     <tr>
    //       <td>Saaketh</td>
    //       <td>21</td>
    //     </tr>
    //   </table>
    // );
  }, []);
  return <div>{result}</div>;
}

export default App;
