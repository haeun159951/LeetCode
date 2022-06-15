var nums1 = [4, 9, 5];
var nums2 = [9, 4, 9, 8, 4];

// Set - no duplication and no order in the array

const intersection = (nums1, nums2) => {
  let set1 = new Set();
  let set2 = new Set();

  for (let i = 0; i < nums1.length; i++) {
    set1.add(nums1[i]);
  }

  for (let i = 0; i < nums2.length; i++) {
    set2.add(nums2[i]);
  }

  //loop -> duplicated values -> push to temp array

  let temp = [];

  set1.forEach((curr) => {
    if (set2.has(curr)) {
      temp.push(curr);
    }
  });

  console.log(temp);
  return temp;
};

// 더 짧게!!
