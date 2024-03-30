//  야근 지수
//  정확성: ❌
//  시간: 30

//  내 코드 1
//  시간 초과
//  야근 피로도 (야근을 시작한 시점에서 남은 일의 작업량을 제곱하여 더한 값)
//  제한 사항을 보면 완탐이나 bfs(?), dfs 못함 주의?

//  최대한 모든 수를 낮춰야 함 ~ 골고루
//  제곱의 합이라 어떠한 수가 특정적으로 크면 안 됨!

//  4+3+3 10 - 4 = 6/3
//  2+1+2 5 - 1 / 3 1.xxxx
//  1+1  2 - 3 / -1 x
function solution(n, works) {
  let answer = 0;

  let sum = works.reduce((pre, cur) => pre + cur);

  if (sum - n <= 0) return 0;

  while (n > 0) {
    let max = Math.max(...works);
    let maxIdx = works.indexOf(max);

    works[maxIdx] -= 1;
    n--;
  }

  answer = works.reduce((pre, cur) => pre + cur * cur, 0);

  return answer;
}

//  내 코드 2
//  maxHeap 도전
//  but 약간의 수정 사항이 있음

function solution(n, works) {
  class MaxHeap {
    constructor() {
      this.heap = [];
    }

    size() {
      return this.heap.length;
    }

    push(value) {
      this.heap.push(value);
      let currentIndex = this.heap.length - 1;

      while (
        this.heap.length - 1 > 1 &&
        this.heap[currentIndex] > this.heap[Math.floor((currentIndex - 1) / 2)]
      ) {
        let temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[Math.floor((currentIndex - 1) / 2)];
        this.heap[Math.floor((currentIndex - 1) / 2)] = temp;
        currentIndex = Math.floor((currentIndex - 1) / 2);
      }
    }

    pop() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop();

      let maxValue = this.heap[0];
      this.heap[0] = this.heap.pop();
      let currentIndex = 0;

      while (
        currentIndex * 2 + 1 > 1 &&
        this.heap[currentIndex] <= this.heap[currentIndex * 2 + 1]
      ) {
        let midIndex =
          this.heap[currentIndex * 2 + 2] > this.heap[currentIndex * 2 + 1] &&
          currentIndex * 2 + 2 <= this.heap.length - 1
            ? currentIndex * 2 + 2
            : currentIndex * 2 + 1;
        if (this.heap[currentIndex] > this.heap[midIndex]) break;
        let temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[midIndex];
        this.heap[midIndex] = temp;
        currentIndex = midIndex;
      }
      return maxValue;
    }

    peek() {
      return this.heap[0];
    }
  }

  let heap = new MaxHeap();

  works.forEach((e) => heap.push(e));

  while (n) {
    let max = heap.pop();
    max -= 1;
    heap.push(max);
    n--;
  }
  console.log(heap);
  let answer = 0;
  return answer;
}

//  내 코드 3
//  maxHeap 최대힙으로 해결

function solution(n, works) {
  class MaxHeap {
    constructor() {
      this.heap = [];
    }

    size() {
      return this.heap.length;
    }

    push(value) {
      this.heap.push(value);
      let currentIndex = this.heap.length - 1;

      while (
        currentIndex > 0 &&
        this.heap[currentIndex] > this.heap[Math.floor((currentIndex - 1) / 2)]
      ) {
        // 여기 currentIndex 수정
        let temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[Math.floor((currentIndex - 1) / 2)];
        this.heap[Math.floor((currentIndex - 1) / 2)] = temp;
        currentIndex = Math.floor((currentIndex - 1) / 2);
      }
    }

    pop() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop();

      let maxValue = this.heap[0];
      this.heap[0] = this.heap.pop();
      let currentIndex = 0;

      while (currentIndex * 2 + 1 < this.heap.length) {
        //여기 수정
        let midIndex =
          this.heap[currentIndex * 2 + 2] > this.heap[currentIndex * 2 + 1] &&
          currentIndex * 2 + 2 <= this.heap.length - 1
            ? currentIndex * 2 + 2
            : currentIndex * 2 + 1;
        if (this.heap[currentIndex] > this.heap[midIndex]) break;
        let temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[midIndex];
        this.heap[midIndex] = temp;
        currentIndex = midIndex;
      }
      return maxValue;
    }

    peek() {
      return this.heap[0];
    }
  }

  let heap = new MaxHeap();
  let sum = 0;

  works.forEach((e) => heap.push(e));

  while (n) {
    let max = heap.pop();
    max -= 1;
    heap.push(max);
    n--;
  }
  let answerArr = [];

  while (heap.size() > 0) {
    let num = heap.pop();
    sum += num;
    answerArr.push(num);
  }

  if (sum <= 0) return 0;

  let answer = answerArr.reduce((pre, cur) => pre + cur * cur, 0);

  return answer > 0 ? answer : 0;
}

//  참고
//  [프로그래머스] LV.3 야근 지수 (JS)
//  KG·2021년 4월 16일
function solution(n, works) {
  let answer = 0;

  if (works.reduce((pre, cur) => pre + cur, 0) <= n) return 0;

  let leng = works.length;
  let sorted = works.sort((a, b) => a - b);

  while (n > 0) {
    let max = sorted[leng - 1];

    for (let i = leng - 1; i >= 0; i--) {
      if (sorted[i] >= max) {
        sorted[i] -= 1;
        n--;
      }
      if (!n) break;
    }
  }

  return sorted.reduce((pre, cur) => pre + Math.pow(cur, 2), 0);
}
