var isAnagram = function (s, t) {
  let one = s.split("").sort().join();
  let two = t.split("").sort().join();
  return one === two;
};

console.log(isAnagram("anagram", "nagaram"));
