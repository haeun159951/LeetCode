var nums1 = [4, 9, 5];
var nums2 = [9, 4, 9, 8, 4];
// expected output
// Output: [4,9]
// Explanation: [9,4]
// Set - no duplication and no order in the array
const intersection = (nums1, nums2) => {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  //loop -> duplicated values -> push to temp array

  let temp = [];

  set1.forEach((curr) => {
    if (set2.has(curr)) {
      temp.push(curr);
    }
  });

  return temp;
};

console.log(intersection(nums1, nums2));
