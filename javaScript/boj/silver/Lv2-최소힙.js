// 최소힙
// 시간: 48분
// 결과: 틀렸습니다!
// 참고: 대학 강의 자료, 최소힙 클래스

// 내 코드 1
const fs = require("fs");
let lines = fs.readFileSync(0).toString().split("\n").map(Number);

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
      if (this.heap.length > left && this.heap[left] < this.heap[smallest])
        smallest = left;
      if (this.heap.length > right && this.heap[right] < this.heap[smallest])
        smallest = right;
      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

let minHeap = new MinHeap();

for (let i = 0; i < lines.length; i++) {
  if (lines[i] === 0) {
    if (minHeap.isEmpty()) {
      console.log(0);
    } else {
      console.log(minHeap.remove());
    }
  } else {
    minHeap.insert(lines[i]);
  }
}

// 내 코드 2
// 결과: 맞췄습니다!
// ai와 함께 고쳤습니다.
// 시간 초과, console.log()
// for문 초기화와 조건식의 정확성을 확인해야 합니다.
const fs = require("fs");
let lines = fs.readFileSync(0).toString().split("\n").map(Number);

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
      const parentIndex = (index - 1) >> 1;
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
      if (this.heap.length > left && this.heap[left] < this.heap[smallest])
        smallest = left;
      if (this.heap.length > right && this.heap[right] < this.heap[smallest])
        smallest = right;
      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

// console.log() 지속적인 출력대신 배열에 저장하여 한번에 출력한다.
let minHeap = new MinHeap();
let output = [];

// lines.length 보다 lines[0](정수 수)가 더 정확하다.
for (let i = 1; i <= lines[0]; i++) {
  if (lines[i] === 0) {
    if (minHeap.isEmpty()) {
      output.push(0);
    } else {
      output.push(minHeap.remove());
    }
  } else {
    minHeap.insert(lines[i]);
  }
}

console.log(output.join("\n"));
