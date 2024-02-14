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

// 복습 코드
//  ⭕
//  효율성도 통과되었지만
//  for문 하나로 해결되는 코드가 있음
function solution(land) {
  let answer = 0;
  let col = land[0].length;
  let row = land.length;
  console.log(col, row);
  for (let i = 1; i < row; i++) {
    let r = land[i - 1];
    for (let j = 0; j < col; j++) {
      let pre = r;
      pre = Math.max(...pre.filter((e, i) => i != j));
      land[i][j] += pre;
    }
  }

  answer = Math.max(...land[row - 1]);

  return answer;
}

//  Algorithm
//  [JS] 프로그래머스 lv2. 땅따먹기
//  2023. 2. 25. 10:57 - tistory
//  참고
function solution(land) {
  let answer = 0;
  let col = land[0].length;
  let row = land.length;
  console.log(col, row);
  //  열이 col 4열이라는게 이미 정해져있기 때문에
  //  for문 하나로도 가능함
  for (let i = 1; i < row; i++) {
    land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] += Math.max(land[i - 1][1], land[i - 1][0], land[i - 1][3]);
    land[i][3] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][0]);
  }

  answer = Math.max(...land[row - 1]);

  return answer;
}
