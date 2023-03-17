var majorityElement = function (nums) {
  let num = nums[0];
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (counter === 0) {
      num = nums[i];
      counter++;
    } else if (nums[i] === num) {
      counter++;
    } else {
      counter--;
    }
  }
  return num;
};

console.log(majorityElement([1, 2, 4, 4, 2, 3, 4]));

// hashmap -> 속도 높이기
