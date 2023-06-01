/*
    New Number properties
    * EPSILON
    * MIN_SAFE_INTEGER
    * MAX_SAFE_INTEGER
*/

let x = Number.EPSILON;
console.log("Epsilon: ", x);

x = Number.MIN_SAFE_INTEGER;
console.log("Min safe integer: ", x);

x = Number.MAX_SAFE_INTEGER;
console.log("Max safe integer: ", x);

x = -9007199254740992;

Number.isInteger(x); // returns true
Number.isSafeInteger(x); // returns false

x = -9007199254740991;
Number.isSafeInteger(x); //returns true
Number.isInteger(x); //returns true
