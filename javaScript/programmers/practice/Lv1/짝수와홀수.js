//  짝수와 홀수
//  정확성: ⭕
//  시간: 1분
//  연습문제

function solution(num) {
  var answer = "";
  if (num % 2 === 0) {
    answer = "Even";
  } else {
    answer = "Odd";
  }
  return answer;
}
