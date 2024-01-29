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
