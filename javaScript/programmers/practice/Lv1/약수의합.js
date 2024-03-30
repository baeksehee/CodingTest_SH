//  약수의 합
//  정확성: ⭕
//  시간: 4분

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    let result = n / i;

    if (result % 1 === 0) {
      console.log(i);
      answer += i;
    }
  }

  return answer;
}
