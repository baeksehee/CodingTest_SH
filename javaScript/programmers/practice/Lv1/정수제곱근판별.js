//  정수 제곱근 판별
//  정확성: ⭕
//  시간: 10분 넘게

function solution(n) {
  let answer = 0;
  let i = 1;
  while (true) {
    if (i * i === n) {
      answer = (i + 1) * (i + 1);
      return answer;
    }
    if (i > n) {
      answer = -1;
      return answer;
    }
    i++;
  }
}
