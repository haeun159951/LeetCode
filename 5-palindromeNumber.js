const isPalindromeNumber = function (num) {
  // store the number to original num
  const originalNum = num;
  let reverseNum = 0;
  let remainder;

  // get the reverse of original num
  // store it in variable
  while (num != 0) {
    remainder = num % 10;
    console.log(`remaninder: ${remainder}`);
    reverseNum = reverseNum * 10 + remainder;
    console.log(`reverseNum: ${reverseNum}`);
    num /= 10;
    console.log(`num: ${num}`);
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
