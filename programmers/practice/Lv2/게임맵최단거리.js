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

//  복습
//  ❌
function solution(maps) {
  let answer = 0;

  let dx = [1, -1, 0, 0];
  let dy = [0, 0, 1, -1];
  let me = [1, 1];

  let goalX = maps[0].length;
  let goalY = maps.length;

  for (let i = 0; i < goalX * goalY; i++) {
    if (me[0] === goalX && me[1] === goalY) {
      break;
    }

    for (let j = 0; j < dx.length; j++) {
      let moveX = me[0] + dx[j];
      let moveY = me[1] + dy[j];

      if (
        moveX <= goalX &&
        moveX >= 0 &&
        moveY <= goalY &&
        moveY >= 0 &&
        maps[moveX - 1][moveY - 1] === 1
      ) {
        me[0] += dx[j];
        me[1] += dy[j];
        maps[moveX][moveY] = 0;
        answer++;
      }
    }
  }
  // console.log(me);

  return me[0] === goalX && me[1] === goalY ? answer : -1;
}

//  복습
// ❌`
// 이상한데 가까워짐

function solution(maps) {
  let answer = -1;
  let me = [0, 0];
  let goalX = maps.length - 1;
  let goalY = maps[0].length - 1;
  let dx = [1, -1, 0, 0];
  let dy = [0, 0, -1, 1];

  let queue = [[0, 0, 1]];

  while (queue.length) {
    let [x, y, l] = queue.shift();
    if (x === goalX && y === goalY) return l;

    for (let i = 0; i < dx.length; i++) {
      let newX = x + dx[i];
      let newY = y + dy[i];

      if (newX > 5 || newX < -5 || newY > 5 || newY < -5) continue;

      if (maps[newX][newY] === 0) continue;

      me = [newX, newY];
      l++;
    }
    queue.push([me[0], me[1], l + 1]);
  }

  return answer;
}

//  아쉬운 복복복습 나의 코드
function solution(maps) {
  let answer = 1;
  let goalX = maps[0].length - 1;
  let goalY = maps.length - 1;
  let me = [0, 0];
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];

  let queue = [];
  queue.push([0, 0, 1]);

  while (queue.length > 0) {
    let [x, y, c] = queue.shift();

    if (x === goalX && y === goalY) {
      return c;
    }

    for (let i = 0; i < dx.length; i++) {
      let nX = x + dx[i];
      let nY = y + dy[i];

      if (nX <= goalX && nX >= 0 && nY <= goalY && nY >= 0) {
        if (maps[nX][nY] === 0) continue;
        me = [nX, nY];
        maps[nX][nY] = 0;
        c++;
      }

      queue.push([nX, nY, c]);
    }
  }

  return -1;
}

//  정답 코드
//  x y를 그냥 수학적으로 생각했음 행과 열이라고 생각행 하는데
//  사용하지 않아도 되는 변수 사용
//  queue.push 위치 잘못
function solution(maps) {
  let goalX = maps[0].length - 1; // 아 .. x가 열이구나
  let goalY = maps.length - 1;
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];

  let queue = [];
  queue.push([0, 0, 1]);
  maps[0][0] = 0;

  while (queue.length) {
    let [y, x, c] = queue.shift();

    for (let i = 0; i < dx.length; i++) {
      let nY = y + dy[i];
      let nX = x + dx[i];

      if (nX === goalX && nY === goalY) {
        return ++c;
      }

      if (
        nX <= goalX &&
        nX >= 0 &&
        nY <= goalY &&
        nY >= 0 &&
        maps[nY][nX] === 1
      ) {
        maps[nY][nX] = 0;
        queue.push([nY, nX, c + 1]);
        console.log(queue);
      }
    }
  }

  return -1;
}
