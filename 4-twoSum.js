// 2,7,11,5 target = 9
// returns array with two elements
//empty array
let nums = [2, 7, 11, 15];

//very slow to loop through everything

function twoSum(nums, target) {
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    for (let j = 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum(nums, 9));
// 2,7,11,5 target = 9
function twoSum2(nums, target) {
  const len = nums.length;
  const map = {};
  for (let i = 0; i < len; i++) {
    const current = nums[i]; //2
    const complement_pair = target - current; // 9-2 = 7

    if (map[complement_pair] !== null) {
      return [map[complement_pair], i]; //
    } else {
      map[current] = i;
    }
  }
}

console.log(twoSum2(nums, 9));
