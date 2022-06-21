var removeDuplicates = function (nums) {
  let len = nums.length;

  if (len === 0) {
    return 0;
  }

  let j = 1;
  for (let i = 0; i < len - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      // no duplicate
      nums[j] = nums[i + 1];
      j++;
    }
  }

  console.log();
  return j;
};

console.log(removeDuplicates([1, 2, 5, 2, 1, 8]));

// faster way to use set

// var removeDuplicates2 = function (nums) {
//   return [...new Set(nums)];
// };

// console.log(removeDuplicates2([1, 2, 5, 2, 1, 8]));
