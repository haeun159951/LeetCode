// input : two strings
// output: boolean

// solution: in the loop, pick one character from str1 and increase of that letter
// search that in another loop str2, if character is missing, both strings are not anagram

function validAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  let result = {};

  for (let i = 0; i < str1.length; i++) {
    var char = str1[i];
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  //{ a: 3, n: 1, g: 1, r: 1, m: 1 }
  console.log(result);

  for (let i = 0; i < str2.length; i++) {
    var char = str2[i];

    if (!result[char]) {
      return false;
    } else {
      // if there is an char, we substract them so that we know
      result[char]--;
    }
  }

  return true;
}

validAnagram("anagram", "nagaram");
