import React from "react";

function BioFunction(props) {
  console.log(props);
  const { name, age } = props;
  return (
    <div>
      Hi my name is {name} and i am {age} years old
    </div>
  );
}

export default BioFunction;
