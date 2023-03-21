// base case (when the recurion ends), different input
// better than forloop - clear alternative way

function countDown(num) {
  if (num <= 0) {
    console.log("all done!");
    return;
  }

  console.log(num);
  num--;
  countDown(num);
}

countDown(3);

// second recursive func

function sumRange(num) {
  if (num == 1) return 1;
  return num + sumRange(num - 1);
}
