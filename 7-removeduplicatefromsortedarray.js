var removeDuplicates = function (nums) {
  let j = 0;
  let temp = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] != nums[i + 1]) {
      temp[j] = nums[i];
      j++;
    }
  }

  temp[j] = nums[nums.length - 1];

  return temp;
};
