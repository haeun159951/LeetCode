let nums = [0, 1, 0, 3, 12];
// Output: [1,3,12,0,0]

var moveZeroes = function (nums) {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num !== 0) {
      nums[index] = num;
      index++;
    }
  }

  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }
};

console.log(moveZeroes(nums));

//다른 풀이) 우선 변수 하나를 정의하고,
// 해당 변수를 이용해 0이 아닌 숫자를 왼쪽으로 쭉 몰아 넣는다.
// 그 후 마지막 0이 아닌 숫자 이후로는 nums 길이까지 0으로 바꾼다. 참신한 풀이같다!
