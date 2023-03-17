const isPalindrome = function (x) {
  if (x < 0) {
    // if the number is negative, return false
    return false;
  }
  let num = x; // store the number
  let rev = 0; // store the reversed number
  while (num > 0) {
    // while the number is greater than 0
    let rem = num % 10; // find the remainder of the number divided by 10
    rev = rev * 10 + rem; // add the remainder to the reversed number times 10 and add it to the reversed number
    num = Math.floor(num / 10); // divide the number by 10 to find the next digit
  }
  return rev === x; // return true if the reversed number is equal to the original number
};
console.log(isPalindrome(121));

// create reverse variable
// create current variable equal to x
// while loop for current doesnt equal to 0

// digit
// set reverse equal to reversed * 10 + current mod 10.
// divde curreny by 10
// return fif eqal
