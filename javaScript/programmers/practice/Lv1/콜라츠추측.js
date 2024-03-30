//  콜라츠 추측
//  정확성: ⭕
//  시간: 10분

//  내 코드

function solution(num) {
  let answer = 0;
  let count = 0;

  if (num === 1) {
    answer = count;
  }

  while (num > 1) {
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    count++;
    if (count === 500) {
      answer = -1;
      return answer;
    }
  }

  return count;
}

//  불필요한 코드 제거
function solution(num) {
  let count = 0;

  if (num === 1) {
    return count;
  }

  while (num > 1) {
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    count++;
    if (count === 500) {
      count = -1;
      return count;
    }
  }

  return count;
}

//  프로그래머스 - 다른 사람 풀이
//  배운점이라면 while문에 num != 1 && answer != 500
//  처럼 해당 값만 아니면 참이라고 구성한 것
