//  숫자의 표현
//  정확성: ⭕
//  효율성: ⭕
//  시간: 10분

//  내 코드1
//  시간: 8분
function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    let result = i;
    for (let j = i + 1; j <= n; j++) {
      if (j === 15) {
        answer++;
        break;
      }
      result += j;
      if (result === n) {
        answer++;
      }
      if (result > n) break;
    }
  }
  return answer;
}

//  내 코드2
//  시간: 총 10분
function solution(n) {
  let answer = 1;

  for (let i = 1; i <= n - 1; i++) {
    let result = i;
    for (let j = i + 1; j <= n; j++) {
      result += j;
      if (result === n) answer++;
      if (result > n) break;
    }
  }
  return answer;
}
