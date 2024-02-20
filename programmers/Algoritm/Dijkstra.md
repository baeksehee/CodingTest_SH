## 다익스트라 알고리즘 개념

[다익스트라 알고리즘 개념 정리 및 구현 (JavaScript)]("https://han-joon-hyeok.github.io/posts/dijkstra-algorithm/")

[(이코테 2021 강의 몰아보기) 7. 최단 경로 알고리즘-동빈나]("https://www.youtube.com/watch?v=acqm9mM1P6o&list=PLRx0vPvlEmdAghTr5mXQxGpHjWqSz0dgC&index=7")

최단 경로 알고리즘 중 하나

### 최단 경로 알고리즘이란?

- 한 지점에서 다른 한 지점까지의 최단 경로
- 한 지점에서 다른 모든 지점까지의 최단 경로
- 모든 지점에서 다른 모든 지점까지의 최단 경로

### 노드, 간선

- 노드: 각 지점
- 간선: 각 지점 간 연결된 도로는 그래프에서 간선

### 다익스트라 알고리즘이란

특정한 노드에서 출발하여 다른 모든 노드로 가는 최단 경로 계산

> 음의 간선 ❌
>
> 그리디 알고리즘으로 분류됨 - 매 상황에서 가장 비용이 적은 노드를 선택해 임의 과정을 반복

### 알고리즘 동작 과정

1\) 출발노드 설정

2\) 최단 거리 테이블 초기화

3\) 방문하지 않은 노드 중에서 최단 거리가 가장 짧은 노드를 선택

4\) 해당 노드를 거쳐 다른 노드로 가는 비용을 계산하여 최단 거리 테이블을 갱신

5\) 위 과정 3번과 4번을 반복함

> 최단 거리 테이블: 현재까지의 최단 거리 -> 최적의 초단 거리

### 다익스트라 알고리즘 특징

- 그리디 알고리즘: 매 상황에서 방문하지 않은 가장 비용이 적은 노드를 선태해 임의 과정 반복

> 최단 거리를 찾는 것이지 최단 경로를 구하기 위해서는 추가적으로 코드 필요

### 예제 코드

> 순차 탐색 예제 코드 작성하려다고 포기함!!
> 좋은데... 어차피 우선순위 heap을 사용한 코드가
> 시간 복잡도도 적다고 해서 heap을 도전하려고 합니다
> 잘가..

```js
//  노드의 개수, 간선의 개수 입력 받기
const n, m = input.split(" ");
//  시작 노드 번호를 입력 받기
const start = input;
//   각 노드에 연결되어 있는 노드에 대한 정보를 담는 배열을 만들기
let graph = [];

for(let i = 0; i < n + 1; i++) {
    graph.push([]);
}
//  방문한 적이 있는지 체크하는 목적의 리스트를 만들기
let visited = new Array(n + 1).fill(false);
//  최단 거리 테이블을 모두 무한으로 초기화
let distance = new Array(n+1).fill(Infinity);

//  모든 간선 정보를 입력받기
for(let i = 0; i <m; i++) {
    let [a, b, c] = input.split(" ");
    //  a번 노드에서 b번 노드로 가는 비용이 c라는 의미
    graph[a].push({to: a, d: c});
}

//  방문하지 않은 노드 중에서, 가장 최단 거리가 짧은 노드의 번호를 반환
function get_smallest_node() {
    let min_value = Infinity;
    let index = 0;  // 가장 최단 거리가 짧은 노드(인덱스)
    for(let i = 1; i < n+1; i++) {
        if(distance[i] < min_value && !visited[i]){
            min_value = distance[i];
            index = i;
        }
    }
    return index;
}

function dijkstra(start) {
    //  시작 노드에 대해서 초기화
    distance[start] = 0;
    visited[start] = true;
    for(let i = 0; i < graph[start].length;)
}
```
