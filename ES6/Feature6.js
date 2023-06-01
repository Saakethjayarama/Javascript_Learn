let numbers = [23, 56, 23, 58, 92, 81];
var number = numbers.findIndex((val, index, numbers) => {
  return 56 === val;
});

console.log(number);
