//  숫자 게임
//  정확성: ❌
//  시간: 30분

//  내 코드1 (14분)
//  시간 초과
//  입력값 활용을 잘하자

function solution(A, B) {
  let answer = 0;
  // let result = new Array(B.length).fill(Infinity);

  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  while (B.length > 0) {
    if (A[0] < B[0]) {
      answer++;
      A.shift();
      B.shift();
    } else if (A[0] > B[0]) {
      B.shift();
    } else if (A[0] === B[0]) {
      B.shift();
    }
  }

  return answer;
}

// 참고
//  [프로그래머스] LV.3 숫자게임 (JS)
//  KG·2021년 4월 19일 - velog

function solution(A, B) {
  let answer = 0;

  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);

  A.forEach((aa) => {
    let max = B[B.length - 1];
    if (aa < max) {
      answer++;
      B.pop();
    }
  });

  return answer;
}
