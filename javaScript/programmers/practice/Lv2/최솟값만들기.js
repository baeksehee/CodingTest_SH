//  최솟값 만들기
//  정확성: ⭕
//  효율성: ⭕
//  시간: 1차 9분
//  시간: 2차 총 19분

//  내 코드
//  정확성: ⭕
//  효율성: ❌
//  시간: 9분
function solution(A, B) {
  let answer = 0;
  let count = A.length;

  for (let i = 0; i < count; i++) {
    let maxA = Math.max(...A);
    let minB = Math.min(...B);
    let maxAindex = A.indexOf(maxA);
    let minBindex = B.indexOf(minB);
    A = A.filter((e, i) => i != maxAindex);
    B = B.filter((e, i) => i != minBindex);
    answer += maxA * minB;
  }

  return answer;
}

//  내 코드2
//  시간 빨라졌지만 그럼에도 시간 초과
function solution(A, B) {
  let answer = 0;
  let count = A.length;

  for (let i = 0; i < count; i++) {
    let maxA = Math.max(...A);
    let minB = Math.min(...B);
    let maxAindex = A.indexOf(maxA);
    let minBindex = B.indexOf(minB);
    A.splice(maxAindex, 1);
    B.splice(minBindex, 1);
    answer += maxA * minB;
  }

  return answer;
}

//  내 코드
//  정확성: ⭕
//  효율성: ⭕
//  시간: 19분

function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  A.map((x, i) => {
    answer += x * B[i];
  });

  return answer;
}

//  프로그래머스 - 다른 사람의 풀이
//  reduce를 활용함
//  시간은 조금 더 빠름
