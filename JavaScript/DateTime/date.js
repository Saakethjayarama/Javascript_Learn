var d =  new Date();
console.log(d.toString());

//creating date objects
//new Date(year, month, day, hour, minute, second, millisec);

var d = new Date(2020, 11, 11, 23, 59, 59, 99);
console.log(d.toString());

//Two digits of year represents 19xx

d = new Date(66, 11,11, 16, 20 , 14 , 0 );
console.log(d.toString());

d = new Date(0);
console.log(d.toString());

d = new Date();
console.log(d.toUTCString());

console.log(d.toDateString());
console.log(d.toTimeString());

console.log(d.getTimezoneOffset());

x = d.toJSON();
console.log(JSON.stringify(x));