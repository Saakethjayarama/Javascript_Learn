/* 
Default Parameters
*/

function myfunction(x = 10, y = 20) {
  return x + y;
}

console.log(myfunction());
// 30

console.log(myfunction(20));
//40

console.log(myfunction((undefined, 40)));
//60
// its better to declare mandatory args first and the non mandatory args next

console.log(myfunction(20, 25));
//45
