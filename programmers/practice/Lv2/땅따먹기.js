//  땅따먹기
//  정확성: ❌
//  시간: 30분

//  내 코드 1
//  내 코드 2로 기존 코드는 주석처리하고 조금 고쳐  봄
//  실패!
function solution(land) {
  let answer = 0;
  //   let line = 0;
  let N = land.length;
  let scores = [];

  function dfs(score = 0, num = 0, l = 0) {
    // 가로 순서: num , 세로 순서: line
    if (l === N) {
      scores.push(score);
      return;
    }

    for (let j = 0; j < N; j++) {
      //   if (j !== num) dfs(score + land[l][j], j, l++);
      if (j !== num) dfs(score + land[l][j], j, l + 1);
    }

    // if (l === N) scores.push(score);

    // return;
  }

  for (let i = 0; i < N; i++) {
    // dfs(0, i, line);
    // dfs(land[0][i], i, line);
    dfs(land[0][i], i, 1);
  }

  //    추가
  answer = Math.max(...scores);
  //   console.log(scores);
  return answer;
}

//  내 코드 2
//  gpt에게 dfs 구현 부탁드림
//  근데 이게 아닌가봄
function solution(land) {
  let answer = 0;
  let N = land.length;
  let scores = [];

  function dfs(score = 0, num = 0, l = 0) {
    if (l === N) {
      scores.push(score);
      return;
    }

    for (let j = 0; j < N; j++) {
      if (j !== num) {
        dfs(score + land[l][j], j, l + 1);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    dfs(land[0][i], i, 1);
  }

  answer = Math.max(...scores); // 최대값 계산
  return answer;
}

//  Algorithm
//  [프로그래머스] 땅따먹기 | JavaScript
//  by Vintz 2021. 6. 29.
//  tistory
function solution(land) {
  let answer = [];
  let N = land.length;

  for (let i = 1; i < N; i++) {
    land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
    land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);

    if (i === N - 1) answer = land[N - 1];
  }

  return Math.max(...answer);
}
