//  등굣길
//  정확성: ❌
//  시간:

//  내 코드
//  그냥 해보고 싶어서 했는데
//  ㅜㅜ
function solution(m, n, puddles) {
  let answer = 0;
  let dp = [];

  for (let i = 0; i < n; i++) {
    dp.push([]);
    for (let j = 0; j < m; j++) {
      dp[i].push(0);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (j === m - 1) dp[i][j] = 1;
      else if (i === n - 1) dp[i][j] = 1;
      else dp[i][j] = 2;
    }
  }

  dp[0][0] = "x";
  dp[n - 1][m - 1] = "x";

  // for(let i = 0; i <puddles.length; i++) {
  //     let [x, y] = puddles[i];
  //     x = x - 1;
  //     y = y -1;
  //     if(dp[x-1][y] === 2)
  //     if(dp[x][y-1] === 2 )
  //     dp[x][y] = "x";
  // }

  return answer;
}

//  문제 해석 보고
//  ❌
//  참고
//  [프로그래머스] LV.3 등굣길 (JS)
//  KG·2021년 4월 9일
function solution(m, n, puddles) {
  let answer = 0;

  let dp = [];

  for (let i = 0; i < n; i++) {
    dp.push([]);
    for (let j = 0; j < m; j++) {
      dp[i].push(0);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0) dp[i][j] = 1;
      if (j === 0) dp[i][j] = 1;
    }
  }

  for (let i = 0; i < puddles.length; i++) {
    let [mm, nn] = puddles[i];
    dp[mm - 1][nn - 1] = "x";
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (dp[i][j] === "x") continue;
      dp[i][j] =
        (dp[i - 1][j] === "x" ? 0 : dp[i - 1][j]) +
        (dp[i][j - 1] === "x" ? 0 : dp[i][j - 1]);
    }
  }

  return dp[n - 1][m - 1];
}

//  [프로그래머스] 🏫등굣길
//  Chobby·2023년 8월 7일 - velog

function solution(m, n, puddles) {
  let dp = Array.from({ length: n }, () => Array(m).fill(0));
  dp[0][0] = 1;
  let num = 1000000007;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) continue;
      if (puddles.some(([x, y]) => x === j + 1 && y === i + 1)) dp[i][j] = 0;
      else {
        dp[i][j] =
          ((i > 0 ? dp[i - 1][j] : 0) + (j > 0 ? dp[i][j - 1] : 0)) % num;
      }
    }
  }

  return dp[n - 1][m - 1];
}
