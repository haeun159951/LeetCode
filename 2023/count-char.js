// make an object to return at the end
// loop over string for each char
// return object at the end
// if the char is a key in object
// if not it set value to 1 (false)
// if space, not numeric etc.. dont do anything

function charCount(str) {
  var result = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}

console.log(charCount("hello"));
