var str = "visit kaiwara";
console.log(str.search(/kaiwara/i));
// /*/i represents case insensitive

var res = str.replace("kaiwara", "JIT");
console.log(res);

// Modifier	Description
// i	Perform case-insensitive matching	
// g	Perform a global match (find all matches rather than stopping after the first match)	
// m	Perform multiline matching

// Expression	Description
// [abc]	Find any of the characters between the brackets	
// [0-9]	Find any of the digits between the brackets	
// (x|y)	Find any of the alternatives separated with |

console.log(/e/.exec("The best things in life are free!"));
