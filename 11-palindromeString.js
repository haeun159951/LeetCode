const isPalindrome = (s) => {
  //s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  // 문자열의 길이의 절반만큼 반복
  for (let i = 0; i < s.length / 2; i++) {
    let left = s[i];
    //오른쪽에서 왼쪽으로 진행합니다. 즉, 문자열의 마지막 문자는 word[length - 1]이므로 여기서 인덱스를 i만큼 계속 빼주면 오른쪽에서 왼쪽으로 진행하겠죠?
    let right = s[s.length - 1 - i];

    // 바교
    if (left != right) {
      return false;
    }
  }
  return true;
};

//console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("mom"));
