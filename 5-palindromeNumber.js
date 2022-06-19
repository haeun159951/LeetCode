const isPalindromeNumber = function (num) {
  // store the number to original num
  const originalNum = num;
  let reverseNum = 0;
  let remainder;

  while (num != 0) {
    remainder = num % 10;
    reverseNum = reverseNum * 10 + remainder;
    num /= 10;
  }
  return originalNum == reverseNum;
};

console.log(isPalindromeNumber(121));

var isPalindrome = function (x) {
  let arr;
  arr.toString().split("").reverse().join("");
  if (String(x) == arr) return true;
  else return false;
};

console.log(isPalindrome(121));

// create reverse variable
// create current variable equal to x
// while loop for current doesnt equal to 0

// digit
// set reverse equal to reversed * 10 + current mod 10.
// divde curreny by 10
// return fif eqal
