function sameFrequency(n1, n2) {
  let str1 = n1.toString();
  let str2 = n2.toString();

  if (str1.length !== str2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < str1.length; i++) {
    countNum1[str1[i]] = (countNum1[str1[i]] || 0) + 1;
  }

  for (let j = 0; j < str2.length; j++) {
    countNum2[str2[j]] = (countNum2[str2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}
var s = sameFrequency(182, 281); // true
var r = sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222);

console.log(s);
