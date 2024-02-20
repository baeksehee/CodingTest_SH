//  배달
//  정확성:❌
//  시간: 60분

//  다익스트라 알고리즘 공부 후 문제 풀이함
//  내 코드 1

function solution(N, road, K) {
  //  graph 그리기
  let graph = [];

  for (let i = 0; i < N; i++) {
    graph.push([]);
    for (let j = 0; j < N; j++) {
      graph[i].push(Infinity);
    }
  }

  for (let i = 0; i < road.length; i++) {
    let a = road[i][0];
    let b = road[i][1];
    let distance = road[i][2];

    graph[a - 1][b - 1] = distance;
    graph[b - 1][a - 1] = distance;
  }

  //  최단거리 확정을 위한 배열
  let visited = new Array(N).fill(false);

  //  최단거리 담아두기
  let dist = [];
  //  노드 0번째와 다른 노드들의 거리로 초기화
  graph.map((e, i) => {
    dist.push(graph[0][i]);
  });

  function findSmallNode(vistied, dist) {
    //  짧은 거리를 찾는 것이니 무한수로 초기화
    let minNode = Infinity;
    let minIdx = 0;

    for (let i = 0; i < dist.length; i++) {
      if (visited[i]) continue;
      if (minNode > dist[i]) {
        minNode = dist[i];
        minIdx = i;
      }
    }
    return minIdx;
  }

  //  알고리즘 이름 까먹음
  function djstrick(visited, dist, graph) {
    //  0번째 노드 초기화 및 최단거리 확정
    dist[0] = 0;
    visited[0] = true;
    // N마을 최단 거리를 다 알기 위해 N 번 반복
    for (let i = 0; i < dist.length; i++) {
      let smallNodeIdx = findSmallNode(visited, dist);
      visited[smallNodeIdx] = true;
      for (let j = 0; j < dist.length; j++) {
        if (visited[j]) continue; //
        if (dist[j] > dist[smallNodeIdx] + graph[smallNodeIdx][j]) {
          dist[j] = dist[smallNodeIdx] + graph[smallNodeIdx][j];
        }
      }
    }
  }

  djstrick(visited, dist, graph);

  return dist.filter((e) => e <= K).length;
}

//  [프로그래머스] 배달 JS
//  Hwang Won Tae·2023년 3월 31일 - velog
//  코드 실행을 따라해봐서 이해함 어려움!!!

function solution(N, road, K) {
  let answer = 0;
  let lines = Array.from(Array(N + 1), () => []);
  let arr = new Array(N + 1).fill(Infinity);

  for (let i = 0; i < road.length; i++) {
    let [a, b, c] = road[i];
    lines[a].push({ to: b, cost: c });
    lines[b].push({ to: a, cost: c });
  }

  arr[1] = 0;
  let queue = [{ to: 1, cost: 0 }];

  while (queue.length) {
    let { to } = queue.pop();

    for (let line of lines[to]) {
      if (arr[line.to] > arr[to] + line.cost) {
        arr[line.to] = arr[to] + line.cost;
        queue.push(line); // 이 부분만 기억 안 남았음
      }
    }
  }

  return arr.filter((e) => e <= K).length;
}

//  복습 코드

function solution(N, road, K) {
  let answer = 0;
  let graph = [];
  let distance = new Array(N + 1).fill(Infinity);

  for (let i = 0; i < N + 1; i++) {
    graph.push([]);
  }

  for (let r of road) {
    let [f, t, d] = r;
    graph[f].push({ to: t, d: d });
    graph[t].push({ to: f, d: d }); //양방향
  }

  distance[1] = 0;
  let queue = [{ to: 1, d: 0 }];

  // for(let i = 1; i < N+1; i++) {
  while (queue.length) {
    // let queue = [];
    let { to } = queue.pop();

    //     for(let j = 1; j <graph[i].length; j++) {
    //         queue.push(graph[i][j]);
    //     }

    // while(queue.length > 0) {
    //     let [to, d] = queue.pop();
    //        if(distance[i] +d < distance[to]) {
    //            distance[to] = distance[i] +d
    //        }
    //    }
    for (let g of graph[to]) {
      if (distance[g.to] > distance[to] + g.d) {
        distance[g.to] = distance[to] + g.d;
        queue.push(g);
      }
    }
  }

  // console.log(distance);
  return distance.filter((e) => e <= K).length;
}
