// this pattern involves creating a window which can either be an arrasy or number
// from one position to another.

// depending on a certain condition, the window either increases or clses

// very useful for keeping track of a subset of data in an array/string

// an array of integrers and a number called n
// calc the max sum of n consecutive elements in the array

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  for (let i = 0; i < arr.length; i++) {
    maxSum += arr[i];
  }
}
