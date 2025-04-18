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

### 최소힙 (코딩테스트지도 강의 자료)

```js
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 0;
      if (this.heap[parentIndex] <= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  remove() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.heapifyDown(0);
    }
    return min;
  }

  heapifyDown(index) {
    while (index < this.heap.length) {
      const left = (index << 1) + 1;
      const right = (index << 1) + 2;
      let smallest = index;
      if (this.heap[left] && this.heap[left] < this.heap[smallest])
        smallest = left;
      if (this.heap[right] && this.heap[right] < this.heap[smallest])
        smallest = right;
      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }

  ifEmpty() {
    return this.heap.length === 0;
  }
}
```

### 예제 코드

순차 탐색

> 순차 탐색 예제 코드 작성하려다고 포기함!!
> 좋은데... 어차피 우선순위 heap을 사용한 코드가
> 시간 복잡도도 적다고 해서 heap을 도전하려고 합니다
> 잘가..

우선순위큐

> python은 힙 자료구조 라이브러리가 있다고...
> 나는 js인데...
> 찾아보니 꼭 힙 자료구조를 완벽하게 안 사용해도 되는 듯....
