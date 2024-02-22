//  쿼드압축 후 개수 세기
//  정확성: ❌
//  시간: 50분

// 내 코드1
//  8시 51분 9시 4 12
//  9시 21분 - 28분
//  10시 11분

//  dfs 도전
//  제한사항을 보면 그렇게 행의 개수가 길지도 않음 ?!
function solution(arr) {
  let answer = [0, 0];
  let visited = [];

  for (let i = 0; i < arr.length; i++) {
    visited.push([]);
    for (let j = 0; j < arr[0].length; j++) {
      visited[i].push(false);
    }
  }

  //     dfs 부분을 못 하겠음
  function dfs(n, visited) {
    if (n === 1) return;

    for (let i = n - 1; i < arr.length; i + n) {
      let arr = [];
      let x = x;
      for (let j = n - 1; j < arr.length; j + n) {
        let y = j;
      }
    }

    dfs(n / 2, visited);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (!visited[i][j]) {
        let num = arr[j][i];
        if (num === 1) answer[1] += 1;
        else answer[0] += 1;
      }
    }
  }

  dfs(arr.length, visited);

  return answer; // 0개의 개수, 1개의 개수
}

// [알고리즘] 쿼드압축 후 개수 세기 (Javascript)
// Taeyoung Jang
//  medium

function solution(arr) {
  const answer = [0, 0];

  function check(x, y, n) {
    if (n === 1) return answer[arr[x][y]]++;

    let flag = true;
    for (let i = x; i < x + n; i++) {
      for (let j = y; j < y + n; j++) {
        if (arr[x][y] !== arr[i][j]) {
          flag = false;
          break;
        }
      }
    }

    if (flag) return answer[arr[x][y]]++;

    n /= 2;

    check(x, y, n);
    check(x + n, y, n);
    check(x, y + n, n);
    check(x + n, y + n, n);
  }

  check(0, 0, arr.length);

  return answer;
}

// 적어보기
function solution(arr) {
  let answer = [0, 0];

  function check(x, y, n) {
    // if(n < 1) return;
    if (n === 1) return answer[arr[x][y]]++;
    //  윗줄 코드! n === 1일때도 count하는거 까먹음
    let ok = true;

    // 범위가 x + n이라는 걸 .. 못 썼네
    for (let i = x; i < x + n; i++) {
      for (let j = y; j < y + n; j++) {
        if (arr[x][y] !== arr[i][j]) {
          ok = false;
          // break; 해야했는데
          break;
        }
      }
    }

    // if(ok) answer[arr[x][y]] += 1;
    if (ok) return answer[arr[x][y]]++;
    // return 하는 이유는! 이 네모는 다 동일하니
    //  더이상 세분화해서 안 봐도 된다.

    n = n / 2;
    // check(x, y+n, n);
    // check(x+n , y, n);
    // check(x+n, y+n, n);
    // check(x,y,n);
    check(x, y, n);
    check(x, y + n, n);
    check(x + n, y, n);
    check(x + n, y + n, n);
  }

  check(0, 0, arr.length);

  return answer;
}

//  복습 코드
//  ❌
//  분할 정복이라고 했음
//  dp랑 비슷하다고 했나? 차이점은 중복되는 것이 아니라는 점
function solution(arr) {
  let answer = [0, 0];
  let n = arr.length;

  function dfs(x, y) {
    if (n < 1) return;

    for (let i = x; i < x + n; i++) {
      for (let j = y; j < y + n; j++) {
        if (arr[i][j] !== arr[x][y]) break;
        else if (i === x + n - 1 && j === y + n - 1) arr[i][j] === true;
      }
    }

    if (arr[x + n - 1][y + n - 1] === true) {
      answer[arr[x][y]]++;
      return;
    }

    n = n / 2;

    dfs(x + n - 1, y);
    dfs(x + n - 1, y + n - 1);
    dfs(x, y + n - 1);
    dfs(x, y);
  }

  dfs(0, 0);

  return answer;
}
