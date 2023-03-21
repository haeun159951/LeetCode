//4 * 3 * 2 * 1
//iteratvie solution
// function factorial(num) {
//   let total = 1;
//   for (let i = num; i > 1; i++) {
//     total *= i;
//   }
//   return total;
// }

// input: num
// remember we have to return something
function factorial(num) {
  if (num == 1) return 1;

  return num * factorial(num - 1);
}

console.log(factorial(4));
