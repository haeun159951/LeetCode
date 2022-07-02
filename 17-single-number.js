/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let len = nums.length;
  let map = new Map();

  for (let i = 0; i < len; i++) {
    if (map.has(nums[i])) {
      map.delete(nums[i]); // if there is any same number, delete that number.
    } else {
      map.set(nums[i], 1); // key and value
    }
  }

  for (let key of map.keys()) {
    console.log(key);
    res = key;
  }

  return res;
};

let nums = [4, 1, 2, 1, 2];

console.log(singleNumber(nums));
