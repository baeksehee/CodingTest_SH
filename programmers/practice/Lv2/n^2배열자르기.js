//  n^2 배열 자르기
//  정확성: ❌ (45점!)
//  시간: 50분

//  내 코드 1
function solution(n, left, right) {
  let answer = [];

  let arr = new Array(n * n);

  for (let i = 0; i < n; i++) {
    // 해당 숫자 1, 2, 3, 4 ..
    let iStart = i * n;
    let iEnd = i * n + i;
    let lineEnd = i * n + n;
    let num = i + 1;

    for (let j = iStart; j <= iEnd; j++) {
      arr[j] = i + 1;
    }

    for (let k = iEnd + 1; k < lineEnd; k++) {
      arr[k] = ++num;
    }
  }

  answer = arr.slice(left, right + 1);

  return answer;
}

//  velog - 프로그래머스 - n^2 배열 자르기
//  아놀드

//  패턴 분석을 할 수 있는 사람들이 대단함
function solution(n, left, right) {
  let answer = [];

  while (left <= right) {
    let x = Math.floor(left / n);
    let y = Math.floor(left % n);
    answer.push(Math.max(x, y) + 1);
    left++;
  }

  return answer;
}
