/*
    Array.find
    find() method returns the value of the first array element that passes a test function
*/

numbers = [10, 20, 30, 40, 50];
x = numbers.find((val, index, numbers) => {
  return val < 30;
});

console.log(x);
