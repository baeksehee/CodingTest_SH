//  멀리 뛰기
//  정확성:
//  시간: 45분

//  velog-KG
//  [프로그래머스] LV.3 멀리 뛰기 (JS)
//  참고
//  동적 계획법 사용법만 알면됨
//  아직 모름
function solution(n) {
  let answer = 0;
  let dp = [];
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }

  answer = dp[n];

  return answer;
}
