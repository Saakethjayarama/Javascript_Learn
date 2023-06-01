import React, { useState } from "react";

function StudentByGenderFunction() {
  const [state, setState] = useState({
    gender: "",
    result: [],
  });

  const handleChange = (event) => {
    setState({
      ...state,
      gender: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url =
      "http://codersclub.in/rest/listByGender.php?gender=" + state.gender;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState({
          ...state,
          result: data,
        });
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="radio"
          name="gender"
          value="M"
          onChange={handleChange}
          checked={state.gender === "M"}
        />{" "}
        Male
        <br />
        <input
          type="radio"
          name="gender"
          value="F"
          onChange={handleChange}
          checked={state.gender === "F"}
        />{" "}
        Female
        <br />
        <input type="submit" value="Submit" />
      </form>
      <table border="1">
        <tbody>
          {state.result.map((student, index) => {
            return (
              <tr key={index}>
                <td>{student.usn}</td>
                <td>{student.name}</td>
                <td>{student.gender}</td>
                <td>{student.phoneNumber}</td>
                <td>{student.email}</td>
                <td>{student.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StudentByGenderFunction;
