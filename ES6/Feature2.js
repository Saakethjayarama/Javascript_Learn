/*
    Arrow functions
    *  not hoisted
    *  const is safe than var coz functions always has constant values
*/

// Before ES 6

function function_name() {
  //do something
}

// ES 6 Syntax

/*
    fat arrow way of writing function
*/
const x = () => {
  //do something
};

//old way

function y(x, z) {
  return x * z;
}

//ES 6 way
const y = (x, z) => {
  return x * z;
};
//or

const y = (x, y) => x * y;
