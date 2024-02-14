bb# 알고리즘

## 그리디 알고리즘(탐욕법)

[(이코테2021 강의 몰어보기)2. 그리디 & 구현 - 동빈나]("https://www.youtube.com/watch?v=2zjoKjt97vQ&list=PLRx0vPvlEmdAghTr5mXQxGpHjWqSz0dgC&index=2")

### 방법

- 현재 상황에서 지금 당장 좋은 것만 고르는 방법
- 문제를 풀기위한 최소한의 아이디어
- 단순히 가장 좋아보이는 것을 반복적으로 선택해도 최적의 해 구할 수 있도록

### 사용을 못할 때

- 그리디 알고리즘으로 `최적의 해`를 못 구할 수 있음

## 구현

[(이코테2021 강의 몰어보기)2. 그리디 & 구현 - 동빈나]("https://www.youtube.com/watch?v=2zjoKjt97vQ&list=PLRx0vPvlEmdAghTr5mXQxGpHjWqSz0dgC&index=2")

> 구현이란, 머릿속에 알고리즘을 소스코드로 바꾸는 과정
> 풀이를 떠올리는 것은 쉽지만 소스코드로 옮기기 어려운 문제

### ex

- 알고리즘은 간단한데 코드가 지나칠 만큼 길어지는 문제
- 실수 연산을 다루고, 특정 소수점 자리까지 출력해야 하는 문제
- 문자열을 특정한 기준에 따라서 끊어 처리해야 하는 문제
- 적절한 라이브러리를 찾아서 사용해야 하는 문제

### 방법

- 구현
- 시뮬레이션
- 완전 탐색(Brute Forcing): 가능한 경우의 수를 모두 검사해보는 탐색 방법

> 시뮬레이션 및 완전 탐색 문제에서는 2차원 공간에서의 `방향 벡터`가 자주 활용됨 </br>
> 2차원 배열 </br>
> ➡️열(Colunm) ⬇️행(Row)
>
> ```js
>       동 북 서 남
> dx = [0, -1, 0, 1];
> dy = [1, 0, -1, 0];
> ```

## 그래프 탐색 알고리즘: DFS/BFS

[(이코테 2021 강의 몰아보기) 3. DFS & BFS-동빈나]("https://www.youtube.com/watch?v=7C9RgOcvkvo&list=PLRx0vPvlEmdAghTr5mXQxGpHjWqSz0dgC&index=3")

### DFS/BFS란

- 탐색(Search)이란 많은 양의 데이터 중에서 원하는 데이터를 찾는 과정
- 대표적인 그래프 탐색 알고리즘으로 DFS와 BFS가 있음
- DFS/BFS 는 코딩테스트에서 매우 자주 등장하는 유형

### 학습 하기 전 알아야 하는 스택, 큐, 재귀함수

- 스택(박스 쌓기): 먼저 들어 온 데이터가 나중에 나가는 형식 (입구와 출구가 동일)
- 큐: 먼저 들어 온 데이터가 먼저 나가는 형식 (입구와 출구가 모두 뚫려 있음)
- 재귀함수: 자기 자신을 다시 호출하는 함수
  - 종료 조건이 없을 시 무한 루프
  - 재귀함수 stack 이라고 봄

### DFS(Depth-First Search)

깊이 우선 탐색

방법

- 탐색 시작 노드를 `스택`에 삽입하고 방문 처리
- 스택의 최상단 노드에 방문하지 않은 인접한 노드가 하나라도 있으면 그 노드를 스택에 넣고 방문

### BFS(Breadth-First Search) `간선 길이가 동일시 최단 거리 구하는 것에 활용 가능`

너비우선 탐색

방법

- 탐색시작 노드를 큐에 삽입하고 방문처리
- `큐`에서 노드를 꺼낸 뒤에 해당 노드의 인접 노드 중에서 방문하지 않은 노드를 모두 큐에 삽입하고 방문처리함

> 다음 노드에 이전 노드 값을 더하는 식으로 해서
> 마지막 노드에 값을 가져오는 것임
> queue 활용이란! 다음 노드가 있을 시 다시 queue에 노드 위치를 넣는 것임

### 예제 코드

```js
function recursive_function(i) {
  if (i === 100) return;
  console.log(i + "번째 재귀함수에서" + i + 1 + "재귀함수를 호출합니다.");
  recursive_function(i + 1);
  console.log(i + "번째 재귀함수를 종료합니다.");
}
recursive_function(0);
```

팩토리얼 구현 예제 js

```js
function factorail_iterative(n) {
  if (n <= 1) return 1;
  return n * factorail_iterative(n - 1);
}

factorail_iterative(3);
```

유클리드 호제법

```js
function gcd(a, b) {
  if (a % b === 0) return b;
  else return gcd(b, a % b);
}

console.log(gcd(192, 162));
```

dfs 그래프
방문 기준 번호가 낮은 인접 노드부터

```js
function dfs(graph, v, visited) {
  visited[v] = true;
  console.log(`${v} `);

  for (let i = 0; i < graph[v].length; i++) {
    if (!visited[graph[v][i]]) dfs(graph, graph[v][i], visited);
  }
}

graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

visited = new Array(9).fill(false);

dfs(graph, 1, visited);
```

bfs 그래프
방문 기준 번호가 낮은 인접 노드부터

```js
function bfs(graph, start, visited) {
  let answer = [];
  let queue = [start];
  visited[start] = true;
  while (queue.length > 0) {
    let v = queue.shift();
    console.log(v);
    for (let i = 0; i < graph[v].length; i++) {
      if (!visited[graph[v][i]]) {
        queue.push(graph[v][i]);
        visited[graph[v][i]] = true;
      }
    }
  }
}

graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

visited = new Array(9).fill(false);

bfs(graph, 1, visited);
```

음료수 얼려 먹기(정확히 맞는지는 모르겠음 ㅎ)

```js
let input = ["4 5", "00110", "00011", "11111", "00000"];

function solution(input) {
  //  N,M을 공백을 기준으로 구분하여 입력 받기
  let answer = 0;
  let [N, M] = input[0].split(" ").map(Number);
  let graph = [];

  //   for (let i = 1; i < input.length; i++) {
  //     graph.push([]);
  //     for (let j = 0; j < input[i].length; j++) {
  //       graph[i - 1].push(input[i][j]);
  //     }
  //   }
  for (let i = 1; i < input.length; i++) {
    graph.push(input[i].split(""));
  }
  // DFS 특정 노드를 방문하고 연결된 모든 노드들도 방문
  function dfs(x, y) {
    //  주어진 범위를 벗어나느 경우에는 즉시 종료
    if (x < 0 || x >= N || y < 0 || y >= M || graph[x][y] !== "0") return false;
    if (graph[x][y] === "0") {
      graph[x][y] = "1";
      dfs(x + 1, y);
      dfs(x, y + 1);
      dfs(x - 1, y);
      dfs(x, y - 1);
      return true;
    }
    return false;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (dfs(i, j) === true) answer += 1;
    }
  }
  return answer;
}

console.log(solution(input));
```

미로 탈출

```js
let input = `5 6
101010
111111
000001
111111
111111
`;

function solution(input) {
  input = input.split("\n");
  const [N, M] = input[0].split(" ").map(Number);
  let graph = [];
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];

  for (let i = 1; i < input.length; i++) {
    graph.push(input[i].split("").map(Number));
  }

  function bfs(x, y) {
    let queue = [];
    queue.push(x);
    queue.push(y);

    while (queue.length > 0) {
      let x = queue.shift();
      let y = queue.shift();

      for (let i = 0; i < dx.length; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

        if (graph[nx][ny] === 0) continue;

        if (graph[nx][ny] === 1) {
          graph[nx][ny] = graph[x][y] + 1;
          queue.push(nx);
          queue.push(ny);
        }
      }
    }

    return graph[N - 1][M - 1]; // 시작점부터 해당 지점까지의 최단 거리를 반환
  }

  return bfs(0, 0); // 시작점은 (0, 0)입니다.
}

console.log(solution(input));
```

## 다익스트라 알고리즘 개념

[다익스트라 알고리즘 개념 정리 및 구현 (JavaScript)]("https://han-joon-hyeok.github.io/posts/dijkstra-algorithm/")
