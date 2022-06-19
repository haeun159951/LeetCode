let nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];

var intersect = function (nums1, nums2) {
  let map = {};
  const arr = [];

  for (let i of nums1) {
    console.log(map[i]);
    map[i] = map[i]++ || 1;
  }

  for (let j of nums2) {
    if (map[j] > 0) {
      arr.push(j);
      map[j]--;
    }
  }
  return arr;
};

console.log(intersect(nums1, nums2));
