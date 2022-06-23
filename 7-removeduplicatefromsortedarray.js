var removeDuplicates = function (arr) {
  var tmp = [];
  for (var i = 0; i < arr.length; i++) {
    if (tmp.indexOf(arr[i]) == -1) {
      tmp.push(arr[i]);
    }
  }
  return tmp;
};

console.log(removeDuplicates([1, 2, 5, 2, 1, 8]));

// faster way to use set

// var removeDuplicates2 = function (nums) {
//   return [...new Set(nums)];
// };

// console.log(removeDuplicates2([1, 2, 5, 2, 1, 8]));
