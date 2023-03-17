/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i] === words[i].split("").reverse().join("")) {
      return words[i];
    }
  }

  return "";
};
let words = ["abc", "car", "ada", "racecar", "cool"];
console.log(firstPalindrome(words));
