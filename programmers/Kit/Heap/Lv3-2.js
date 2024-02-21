//  이중우선순위큐
//  정확성: ❌
//  시간: 60분

//  내 코드1
//  힙 자료구조를 완벽하게 구현하기 어려운 점에서 틀리지 않았나 싶다.
class MinHeap {
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
      this.heap[Math.floor((currentIndex - 1) / 2)] > this.heap[currentIndex]
    ) {
      let temp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[Math.floor(currentIndex - 1) / 2];
      this.heap[Math.floor((currentIndex - 1) / 2)] = temp;
      currentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    let minValue = this.heap[0];
    let currentIndex = 0;
    this.heap[0] = this.heap.pop();

    while (currentIndex * 2 + 1 > this.heap.length - 1) {
      let midChildIndex =
        currentIndex * 2 + 2 > this.heap.length - 1 &&
        this.heap[currentIndex * 2 + 2] < this.heap[currentIndex * 2 - 1]
          ? currentIndex * 2 + 2
          : currentIndex * 2 + 1;

      if (this.heap[midChildIndex] === this.heap[currentIndex]) break;

      let temp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[midChildIndex];
      this.heap[currentIndex] = temp;
      currentIndex = midChildIndex;
    }

    return minValue;
  }

  peek() {
    return this.heap.pop();
  }

  maxPop() {
    return this.heap.pop();
  }
}

function solution(operations) {
  let answer = [];
  let minHeap = new MinHeap();

  minHeap.push(1);

  for (let operation of operations) {
    if (operation.match(`/^\I/`)) {
      minHeap.push(Number(operation.slice(2)));
    } else if (operation === "D 1") {
      minHeap.pop();
    } else {
      minHeap.maxPop();
    }
  }

  console.log(minHeap);
  return minHeap.size() === 0 ? [0, 0] : [minHeap.pop(), minHeap.maxPop()];
}
//  힙 자료구조를 사용하지 않은 코드인듯
//  [프로그래머스] LV.3 이중우선순위큐 (JS)
//  KG-velog 참고

function solution(operations) {
  let op = operations.map((e) => e.split(" "));
  let heap = []; // 힙 자료구조가 아닌 힙...

  op.forEach((v) => {
    if (v[0] === "I") {
      heap.push(Number(v[1]));
    } else {
      let num = (v[1] === "1" ? Math.max : Math.min)(...heap);
      let dIdx = heap.indexOf(num);
      heap.splice(dIdx, 1);
    }
  });

  return heap.length ? [Math.max(...heap), Math.min(...heap)] : [0, 0];
}
