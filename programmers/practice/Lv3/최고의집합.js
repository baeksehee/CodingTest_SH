//  최고의 집합
//  정확성: ❌
//  시간: 25

//  내 코드1
//  감이 잘 안 잡힌다!
function solution(n, s) {
  let answer = [];
  let numbers = [];
  let average = Math.floor(s / n);

  if (s + s <= n) return [-1];

  for (let i = 1; i <= s; i++) {
    numbers.push(i);
  }

  let sum = 0;

  while (n > 0) {
    if (sum + average <= s) {
      answer.push(average);
      sum += average;
    }
    n--;
  }

  let midResult = answer.reduce((pre, cur) => pre + cur, 0);

  if (answer === s) return answer;

  let need = s - midResult;

  if (need < 0) {
    answer[0] -= need;
  } else if (need > 0) {
    answer[answer.length - 1] += need;
  }

  return answer;
}

//  참고
//  [프로그래머스] LV.3 최고의 집합 (JS)
//  KG·2021년 4월 17일
//  velog
function solution(n, s) {
  let mid = Math.floor(s / n);
  let answer = new Array(n).fill(mid);
  let rest = s % n;
  if (mid === 0) return [-1];

  for (let i = 0; i < answer.length; i++) {
    if (rest === 0) break;
    answer[i] = answer[i] + 1;
    rest--;
  }

  return answer.sort((a, b) => a - b);
}
