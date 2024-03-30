//  나누어 떨어지는 숫자 배열
//  정확성: ⭕
//  시간: 5분

//  내 코드
function solution(arr, divisor) {
  let answer = [];

  arr.map((x) => {
    if (x % divisor === 0) {
      answer.push(x);
    }
  });

  answer.length > 0 ? answer.sort((a, b) => a - b) : answer.push(-1);

  return answer;
}

//  프로그래머스 - 다른 사람의 풀이
//  filter()로 새로운 배열 반환이 재미있음
