//  제일 작은 수 제거하기
//  정확성: ⭕
//  시간: 7분 (속도 문제 강함)

//  내 코드
function solution(arr) {
  let answer = [];

  arr.length > 1
    ? (answer = arr.filter((a) => a != Math.min(...arr)))
    : answer.push(-1);

  return answer;
}

// 삼항연산자를 괜히 풀어봤는데 속도 면에서는 같음
//  filter가 늘 답은 아니구나
function solution(arr) {
  let answer = [];

  if (arr.length > 1) {
    answer = arr.filter((a) => a != Math.min(...arr));
  } else {
    answer.push(-1);
  }

  return answer;
}

//  프로그래머스 - 다른 사람의 풀이
//  많이 참고해서 고친 코드
function solution(arr) {
  if (arr.length > 1) {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    return arr;
  } else return [-1];
}

//  프로그래머스 - 다른 사람의 풀이
//  아니 왜 차이가 나는 거지 속도에서?
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}
