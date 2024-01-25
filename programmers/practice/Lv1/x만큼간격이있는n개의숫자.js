//  x만큼 간격이 있는 n개의 숫자
//  정확성: ⭕
//  시간: 2분

function solution(x, n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }

  return answer;
}
