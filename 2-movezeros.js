let nums = [0, 1, 0, 3, 12];
// Output: [1,3,12,0,0]

var moveZeroes = function (nums) {
  let lastNonZero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZero++] = nums[i];
    }
  }

  for (let i = lastNonZero; i < nums.length; i++) {
    console.log(lastNonZero);
    nums[i] = 0;
  }
  return nums;
};
let result = moveZeroes(nums);
console.log(result);

//다른 풀이) 우선 변수 하나를 정의하고,
// 해당 변수를 이용해 0이 아닌 숫자를 왼쪽으로 쭉 몰아 넣는다.
// 그 후 마지막 0이 아닌 숫자 이후로는 nums 길이까지 0으로 바꾼다. 참신한 풀이같다!
