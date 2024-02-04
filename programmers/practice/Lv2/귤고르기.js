//  귤 고르기
//  정확성: ⭕
//  시간: 1시간 이상?

//  내 코드 1

function solution(k, tangerine) {
  let answer = 0;
  let kSort = tangerine.sort((a, b) => a - b);
  let maxSize = Math.max(...tangerine);
  let num = [];

  for (let i = 1; i <= maxSize; i++) {
    let count = 0;

    kSort.map((e) => {
      if (e === i) {
        count++;
      }
    });

    num.push(count);
  }

  while (k > 0) {
    let max = Math.max(...num);
    let maxIndex = num.indexOf(max);

    k = k - num[maxIndex];
    num.splice(maxIndex, maxIndex - 1);
    answer++;
  }

  return answer;
}

//  내 코드 2

function solution(k, tangerine) {
  let answer = 0;
  let arr = tangerine.sort((a, b) => a - b);
  let maxSize = Math.max(...tangerine);
  let countArr = new Array(maxSize).fill(0);

  arr.map((e) => {
    countArr[e - 1] += 1;
  });

  countArr.sort((a, b) => b - a);

  for (let i = 0; i < countArr.length; i++) {
    if (k <= 0) return answer;
    k = k - countArr[i];
    answer++;
  }

  return answer;
}

//  복습 코드
//  ⭕ 9분
//  실행 속도도 빨라짐 😁
//  두 번째 코드 ⭕지만, 매개변수 배열에서 가장 큰 값으로 배열 길이를 생성 0으로 채움 메모리 낭비라고 해야 하나?
//  이번 코드는 최소 배열 길이로 해결한 듯!

function solution(k, tangerine) {
  let answer = 0;
  let countArr = [];
  tangerine.sort((a, b) => a - b);

  //  작은 수부터 차례대로 countArr에 개수를 담음
  for (let i = 0; i < tangerine.length; i++) {
    if (tangerine[i - 1] === tangerine[i]) {
      countArr[countArr.length - 1]++;
    } else countArr.push(1);
  }

  //  개수가 큰 것 순으로 정렬
  countArr.sort((a, b) => b - a);

  //  k에서 개수를 뺌
  for (let i = 0; i < countArr.length; i++) {
    if (k <= 0) break;
    k -= countArr[i];
    answer++;
  }

  return answer;
}
