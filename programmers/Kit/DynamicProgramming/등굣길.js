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
