//  무인도 여행
//  정확성: ❌
//  시간: 40분

// 내 코드1
//  나동빈님 유트브 강의에서 얼음 깨먹기와 비슷한 문제인 듯
//  dfs 인가?
//  아니 어디서 dfs 가 안 끊기는 거야!
//  내가 잘 못한 점
//  1. 2차 배열 원소는 숫자가 아닌 문자열이다
//  2. maps[row][cul]의 "X" 인지는 밑에 ㅇㅣ중 for문을 돌릴 때 판단했어야 했다.
//  3. 한 번에 이어지는 숫자들의 합의 관리를 못했다.
//  - 지금 내코드를 조금 수정하더라 중복되어 숫자가 더해질 것이다.
function solution(maps) {
  let answer = [];

  let row = maps.length - 1;
  let cul = maps[0].length - 1;

  let dx = [1, -1, 0, 0];
  let dy = [0, 0, -1, 1];

  maps = maps.map((e) => e.split(""));

  function dfs(num, r, c) {
    if (maps[r][c] === "X") return 0;

    if (r === row && c === cul) {
      if (maps[r][c] === "X") {
        if (num > 0) return num;
        if (num === 0) return 0;
      } else {
        if (num > 0) return num + maps[r][c];
        else return maps[r][c];
      }
    }

    for (let i = 0; i < dx.length; i++) {
      if (
        r + dx[i] >= 0 &&
        r + dx[i] <= row &&
        c + dy[i] >= 0 &&
        c + dy[i] <= cul
      ) {
        if (maps[r + dx[i]][c + dy[i]] !== "X") {
          num += dfs(num, r + dx[i], c + dy[i]);
          maps[r + dx[i]][c + dy[i]] = "X";
        }
      }
    }

    return num;
  }

  for (let i = 0; i <= row; i++) {
    for (let j = 0; j <= cul; j++) {
      answer.push(dfs(0, i, j));
    }
  }

  return answer.length === 0 ? [-1] : answer;
}

//  참고
//  JAVASCRIPT, PROGRAMMERS, LV2
//  [프로그래머스] 무인도 여행 - JavaScript
//  Feb 13, 2023 LeeJam
function solution(maps) {
  let answer = [];
  let row = maps.length - 1;
  let cul = maps[0].length - 1;
  let dx = [1, -1, 0, 0];
  let dy = [0, 0, 1, -1];

  maps = maps.map((e) => e.split(""));

  function dfs(x, y, sum) {
    // 매개변수 설정 잘했는뎅 ..ㅜㅜ
    sum = Number(sum);

    for (let i = 0; i <= dx.length; i++) {
      let nX = x + dx[i];
      let nY = y + dy[i];

      if (nX >= 0 && nX <= row && nY >= 0 && nY <= cul) {
        if (maps[nX][nY] !== "X") {
          let next = maps[nX][nY];
          maps[nX][nY] = "X"; // "X"로 바꿔주는 이거! 위 치 주의 나는 밑에했었음
          sum += dfs(nX, nY, next);
        }
      }
    }

    return sum;
  }

  for (let i = 0; i <= row; i++) {
    for (let j = 0; j <= cul; j++) {
      if (maps[i][j] != "X") {
        const start = maps[i][j];
        maps[i][j] = "X"; // "X"로 바꿔주는 이거! 위 치 주의 나는 밑에했었음
        answer.push(dfs(i, j, start));
      }
    }
  }

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
