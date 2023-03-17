var removeDuplicates = function (arr) {
  let count = 0;
  let indexInsert = 1;

  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[i + 1]) {
      arr[indexInsert++] = arr[i];
      count++;
    }
  }
  return count - indexInsert;
};

console.log(removeDuplicates([1, 1, 2]));

// faster way to use set

// var removeDuplicates2 = function (nums) {
//   return [...new Set(nums)];
// };

// console.log(removeDuplicates2([1, 2, 5, 2, 1, 8]));
