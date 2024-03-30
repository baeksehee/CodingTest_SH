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

//  복습 코드
//  ⭕
function solution(x, y, n) {
  let answer = 0;

  let dp = new Array(y + 1).fill(Infinity);
  dp[x] = 0;

  for (let i = x; i <= y; i++) {
    if (i + n <= y) dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
    if (i * 2 <= y) dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
    if (i * 3 <= y) dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
    // if(dp[y] > 0) break;
    //  내가 위의 코드를 적어서 테스트 1케이스에서 통과하지 못하고 있었음
    //  두번째 케이스에서는 한 번의 연산으로 y값에 도달하고
    //  세번째 케이스는 어차피 도달할 수 없기에
    //  성공했던 거임
    //  dp[y] 는 기존에 Infinity이므로 !!
  }
  //    console.log(dp);
  // console.log(dp[y]);

  return dp[y] !== Infinity ? dp[y] : -1;
}
