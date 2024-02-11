//  숫자 변환하기
//  정확성: ❌
//  시간:   30분

//  내코드1
//  dfs로 풀려고 했으나 시간초과 및 런타임 에러
//  dp라는 힌트로 얻었음 -> 수정해보겠음
function solution(x, y, n) {
  let answer = 1;
  let results = [];

  function dfs(count, value) {
    if (value === y) {
      results.push(count);
      return;
    }

    if (value > y) return;

    dfs(count + 1, value + n);
    dfs(count + 1, value * 2);
    dfs(count + 1, value * 3);
  }

  dfs(0, x);
  console.log(results);
  if (results.length === 0) return -1;

  return Math.min(...results);
}
//  queue로도 구현한 사람이 있는 듯
//  dp 잘 모르겠음
//  공부 정리/프로그래머스
//  [프로그래머스] 숫자 변환하기 js
//  by 경적필패. 2023. 2. 13.
function solution(x, y, n) {
  let dp = new Array(y + 1).fill(Infinity);
  dp[x] = 0;

  for (let i = x; i <= y; i++) {
    dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
    dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
    dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
  }

  return dp[y] === Infinity ? -1 : dp[y];
}
