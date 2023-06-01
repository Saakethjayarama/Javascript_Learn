import React, { useState } from "react";

function StudentSearchFuntion() {
  const [state, setState] = useState({
    usn: "",
    student: [],
  });

  const handleChange = (event) => {
    setState({
      ...state,
      usn: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://codersclub.in/rest/searchByUSN.php?usn=" + state.usn)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const res = [];
        for (const [key, value] of Object.entries(data)) {
          res.push({ key, value });
        }
        setState({
          ...state,
          student: res,
        });
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="usn"
          placeholder="USN"
          onChange={handleChange}
          value={state.usn}
        />
        <input type="submit" value="Submit" />
        <br />
        <table border="1">
          {state.student.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.key}</td>
                <td>{value.value}</td>
              </tr>
            );
          })}
        </table>
      </form>
    </div>
  );
}

export default StudentSearchFuntion;
