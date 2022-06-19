const isPalindrome = (s) => {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  for (let i = 0; i < Math.floor(s.length) / 2; i++) {
    let left = s[i];
    let right = s[s.length - 1 - i];
    console.log(right);

    if (left != right) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
