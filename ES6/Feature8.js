/*
    New Globals
*/

x = 10 / 0;
console.log(isFinite(x)); // returns false

x = NaN;
console.log(isNaN(x)); // returns true
console.log(isNaN("Saaketh")); // returns true
