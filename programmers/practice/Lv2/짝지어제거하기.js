//  짝지어 제거하기
//  정확성: ❌
//  시간: 30분 넘게

//  내 코드1
function solution(s) {
  let answer = 0;
  let ing = true;
  let sArr = s.split("");

  while (ing) {
    sArr.map((e, i) => {
      if (e !== sArr[i - 1]) {
        sArr.splice(i, 1);
        sArr.splice(i - 1, 1);
        if (sArr.lenth === 0) {
          answer = 1;
          return answer;
        }
      } else if (i === sArr.length - 1) return answer;
    });
  }

  return answer;
}

// 내 코드2
function solution(s) {
  let answer = -1;
  let ing = true;
  let sArr = s.split("");

  if (sArr.length === 0) {
    return 1;
  }

  while (sArr.length > 0) {
    let removeIndex = [,];
    sArr.map((e, i) => {
      if (e === sArr[i - 1]) {
        removeIndex.push(i);
        removeIndex.push(i - 1);
      }
      if (i === sArr.length - 1 && removeIndex.length == 0) return 0;
    });
    for (let i = 0; i < removeIndex.length; i++) {
      sArr.splice(removeIndex[i], 1);
    }
  }
}

//  프로그래머스 짝지어 제거하기 - js
//  velog - 김민찬
//  stack이라는 알고리즘으로 풀어야 했구나
//  알고리즘을 모르면 거의 맞기가 어렵겠음

function solution(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] !== s[i]) stack.push(s[i]);
    else stack.pop();
  }
  return stack.length === 0 ? 1 : 0;
}
