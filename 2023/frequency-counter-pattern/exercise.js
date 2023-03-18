// naive approach : as n grows o(n2)

function same(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctindex = arr2.indexOf(arr1[i] ** 2);
    if (correctindex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctindex, 1);
  }
  return true;
}
var result = same([1, 2, 3, 2], [9, 1, 4, 4]);

console.log(result);
