//  피보나치수
//  정확성: ⭕`(수가 너무 커서 정확성 ❌, 프로그래머스가 힌트 줌)
//  시간: 40분 넘게

//  내 코드1

function solution(n) {
  let answer = 0;

  //  f(2) 초기값 설정
  function f(a = 0, b = 1) {
    let result = a + b;
    return [b, result];
  }

  for (let i = 2; i <= n; i++) {
    let answer = f()[1];
    console.log(answer);
    let resultA = f()[0];
    let resultB = f()[1];

    console.log(f(resultA, resultB));
    console.log(answer);
  }

  // answer = f(n) / 1234567;

  return answer;
}

//  내 코드2

//  문제를 이해하고 논리적으로 접근했더니 쉬워짐
//  수가 커져 정확성 테스트가 떨어짐
//  프로그래머스에서 힌트 얻음

//  (a + b) % m = ((a % m) + (b % m)) % m

//  a + b, a와 b에 1234567을 나눠줌
function solution(n) {
  let answer = 0;
  let F = [0, 1];

  for (let i = 2; i <= n; i++) {
    let newValue = (F[i - 2] % 1234567) + (F[i - 1] % 1234567);
    F.push(newValue);
    answer = newValue % 1234567;
  }

  return answer;
}
