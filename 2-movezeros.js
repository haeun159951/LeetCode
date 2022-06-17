let nums = [0, 1, 0, 3, 12];
// Output: [1,3,12,0,0]

const moveZeroes = (nums) => {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      let temp = nums[j];
      console.log(temp);
      console.log(`nums j: ${nums[j]}`);
      nums[j] = nums[i];
      console.log(`nums i: ${nums[i]}`);
      nums[i] = temp;
      j++;
    }
  }
  return nums;
};

let result = moveZeroes(nums);
console.log(result);
