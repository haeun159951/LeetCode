const iterativeFactorial = function (num) {
  if (num == 0) {
    return 1;
  }

  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

  return factorial;
};

// recursive - we can call method itself

// 1! = 1 * 0! = 1
// 2! = 2 * 1 = 2 * 1!
// 3! = 3 * 2 * 1 = 3 * 2!
// 4! = 4 * 3 * 2 * 1 = 4 *3!

// n! = n * (n-1)!

const recursiveFactorial = function (num) {
  if (num == 0) return 1;

  return num * recursiveFactorial(num - 1);
};
