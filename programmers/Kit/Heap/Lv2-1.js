//  더 맵게

function solution(scoville, K) {
  let answer = 0;
  let sc = [...scoville].sort((a, b) => a - b);
  let mixSc = function (a, b) {
    return a + b * 2;
  };
  let mixCount = 0;

  let mixResult = function () {
    if (K > mixSc(sc[0], sc[1])) {
      sc.splice(0, 1);
      sc.splice(1, 1);
      mixCount++;
      sc.sort();
      if (sc.length === 0) {
        answer = -1;
      } else {
        mixResult();
      }
    } else {
      answer = ++mixCount;
      sc.splice(0, mixSc(sc[0], sc[1]));
    }
  };
  mixResult();
  return answer;
}

//  다시 풀어본 코드
//  정확성:❌
//  효율성:❌
function solution(scoville, K) {
  let answer = 0;

  while (scoville.length > 1) {
    if (scoville.length === 1 && scoville[0] < K) {
      answer = -1;
      break;
    }
    if (Math.min(...scoville) >= K) break;
    scoville.sort((a, b) => a - b);
    scoville.push(scoville[0] + scoville[1] * 2);
    scoville.splice(0, 2);
    answer++;
  }
  return answer;
}

//  참고
// [프로그래머스] 더 맵게
// Chobby·2023년 8월 4일 - velog

class MinHeap {
  // () 괄호 삭제

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
      this.heap[Math.floor((currentIndex - 1) / 2)] > this.heap[currentIndex]
    ) {
      // currentIndex >0 추가
      const temp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[Math.floor((currentIndex - 1) / 2)]; // 잘못된 부분 수정
      this.heap[Math.floor((currentIndex - 1) / 2)] = temp;
      currentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  pop() {
    if (this.heap.length === 0) return null; // return 에 null추가
    if (this.heap.length === 1) return this.heap.pop();

    const minValue = this.heap[0]; //pop()은 앞에 0 번째 인덱스가 사라지므로 .. [0]으로 접근
    this.heap[0] = this.heap.pop(); // 최솟값을 맨 밑의 노드에서 가져오는 코드를 까먹음
    let currentIndex = 0;

    while (currentIndex * 2 + 1 < this.heap.length) {
      //&& this.heap[currentIndex] > this.heap[currentIndex * 2 + 1]) 필요없는 조건
      let midChildIndex =
        currentIndex * 2 + 2 < this.heap.length &&
        this.heap[currentIndex * 2 + 2] < this.heap[currentIndex * 2 + 1]
          ? currentIndex * 2 + 2
          : currentIndex * 2 + 1; //    부등호 조심!!
      if (this.heap[currentIndex] < this.heap[midChildIndex]) break;
      const temp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[midChildIndex];
      this.heap[midChildIndex] = temp; //temp로 할당해야 하는데 이미 바뀐 currentIndex 값을 할당하고자 했다니
      currentIndex = midChildIndex;
    }

    return minValue;
  }

  peek() {
    return this.heap[0];
  }
}

function solution(scoville, K) {
  let minHeap = new MinHeap();
  let mixedCount = 0;

  for (let sco of scoville) {
    minHeap.push(sco);
  }

  // console.log(minHeap);

  while (minHeap.size() >= 2 && minHeap.peek() < K) {
    //   size는  length, 첫번째 인덱스 접근 peak은 [0]로 하고 있었음
    // console.log(minHeap);
    let first = minHeap.pop();
    let second = minHeap.pop();
    let newSco = first + second * 2;
    mixedCount++;
    minHeap.push(newSco);
  }

  return minHeap.peek() >= K ? mixedCount : -1;
}
