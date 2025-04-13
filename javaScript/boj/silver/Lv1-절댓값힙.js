// 절댓값 힙
// 시간: 30분
// 결과: 메모리 초과
// 내 코드 1

let fs = require("fs");
let lines = fs.readFileSync("절댓값.txt").toString().split("\n").map(Number);

let originArray = []; // 숫자 그대로인 정수 배열
let absArray = []; // 절댓값으로 변환해 넣은은 배열

for (let i = 1; i <= lines[0]; i++) {
  if (lines[i] == 0) {
    // 0을 만났을 때
    if (absArray.length == 0) {
      // 0을 만나고 배열의 길이가 0일 때 0을 출력력
      console.log(0);
    } else {
      let findingMin = Math.min(...absArray); // 절댓값 배열에서 최소값을 찾는다.
      let findIndex = absArray.indexOf(findingMin); // 절댓값 배열에서 최소값의 인덱스를 찾는다.
      console.log(originArray[findIndex]); // 정수 배열에서 최소값의 인덱스를 찾아서 출력한다.
      originArray = originArray // 정수 배열에서 최소값을 삭제한다. slice() 사용
        .slice(0, findIndex)
        .concat(originArray.slice(findIndex + 1));
      absArray = absArray // 절댓값 배열에서 최소값을 삭제한다. slice() 사용
        .slice(0, findIndex)
        .concat(absArray.slice(findIndex + 1));
    }
  } else {
    // 절댓값 배열과 정수 배열에 값을 넣는다.
    originArray.unshift(lines[i]);
    absArray.unshift(Math.abs(lines[i]));
  }
}

// 내 코드2
// 결과: 시간 초과
// 코딩테스트 지도 강의 자료의 최소힙 코드를 참고했다.

let fs = require("fs");
let lines = fs.readFileSync("절댓값.txt").toString().split("\n").map(Number);

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

let minHeap = new MinHeap();
const n = lines[0];

for (let i = 1; i <= n; i++) {
  if (lines[i] === 0) {
    if (minHeap.ifEmpty()) {
      console.log(0);
    } else {
      console.log(minHeap.remove());
    }
  } else {
    minHeap.insert(Math.abs(lines[i]));
  }
}

// 내 코드3
// 내 코드 ２를 gpt 에게 물어서서 했다.
// 이중 배열로 해결했다.
// 원값과 절댓값을 같이 넣고,
// compare 메서드로 절댓값이 같으면 원값을 비교한다.
let fs = require("fs");
let lines = fs.readFileSync(0).toString().trim().split("\n").map(Number);

class MinHeap {
  constructor() {
    this.heap = [];
  }

  compare(a, b) {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (this.compare(this.heap[index], this.heap[parentIndex]) >= 0) break;
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
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
    const length = this.heap.length;
    while (index < length) {
      const left = (index << 1) + 1;
      const right = (index << 1) + 2;
      let smallest = index;

      if (
        left < length &&
        this.compare(this.heap[left], this.heap[smallest]) < 0
      )
        smallest = left;
      if (
        right < length &&
        this.compare(this.heap[right], this.heap[smallest]) < 0
      )
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
const n = lines[0];

for (let i = 1; i <= n; i++) {
  const x = lines[i];
  if (x === 0) {
    if (minHeap.isEmpty()) {
      console.log(0);
    } else {
      console.log(minHeap.remove()[1]);
    }
  } else {
    minHeap.insert([Math.abs(x), x]);
  }
}
