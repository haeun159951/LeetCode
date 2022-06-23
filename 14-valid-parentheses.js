/*
")" - invalid
"(" - invalid
(] invalid
()[]{} valid 


*/

var isValid = function (s) {
  const hashMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack = [];

  for (let i = 0; i < s; i++) {
    if (hashMap[i]) {
      console.log(hashMap[i]);
      stack.push(hashMap[i]);
    } else if (stack.length > 0 && stack[stack.length - 1] === hashMap[i]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid(")"));
