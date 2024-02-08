//  게임 맵 최단거리
//  정확성: ❌
//  시간: 1시간

// 7시 50분  8시 00분 14분 ~ 44분
//  나는 (1, 1)에 있고 상대방은 (n,m)에 있음
//  최단 거리를 구해야 함 (0원소는 안되고 1원소는 지나갈 수 있음)

function solution(maps) {
  let answer = 0;
  let me = [0, 0];
  let distances = [];

  function dfs(n = 0, m = 0, count = 0) {
    me[0] = n;
    me[1] = m;

    if (me[0] === maps[0].length && me[1] === maps.length) {
      return distances.push(count);
    }

    if (count >= maps[0].length * maps.length - 1) {
      return;
    }

    if (maps[n + 1][m] === 1) dfs(n + 1, m, count++);
    if (maps[n - 1][m] === 1) dfs(n - 1, m, count++);
    if (maps[n][m + 1] === 1) dfs(n, m + 1, count++);
    if (maps[n][m - 1] === 1) dfs(n, m - 1, count++);
  }

  dfs(0, 0, 0);

  console.log(distances);
  answer = distances.length === 0 ? -1 : Math.min(...distances);

  return answer;
}

//  프로그래머스 코딩테스트 연습 Level 2 - 게임 맵 최단거리 (JavaScript)
//  나를 위한 것만은 아닌 기록
//  tistory
//  이거 보고 고쳤는데 왜 오류가 나는건지?!
//  bfs
function solution(maps) {
  const yLen = maps.length;
  const xLen = maps[0].length;
  let goalX = xLen - 1;
  let goalY = yLen - 1;
  let moveX = [1, -1, 0, 0];
  let moveY = [0, 0, 1, -1];

  let meQueue = [];
  meQueue.push([0, 0, 1]); // x, y, count

  while (meQueue.length) {
    let [meX, meY, count] = meQueue.shift();
    if (meX === goalX && meY === goalY) return count;

    for (let i = 0; i < 4; i++) {
      let meMoveX = meX + moveX[i];
      let meMoveY = meY + moveY[i];
      if (
        meMoveX >= 0 &&
        meMoveX < xLen &&
        meMoveY >= 0 &&
        meMoveY < yLen &&
        maps[meMoveX][meMoveY] === 1
      ) {
        meQueue.push([meMoveX, meMoveY, count + 1]);
        maps[meMoveX][meMoveY] = 0;
      }
    }
  }

  return -1;
}
