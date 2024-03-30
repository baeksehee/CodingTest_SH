//  약수의 개수와 덧셈
//  정확성: 7분
//  시간: ⭕

//  내 코드
//  구해야 하는 거, 수의 약수
//  약수의 개수

function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let target = [];
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) target.push(j);
    }

    answer += target.length % 2 === 0 ? i : -i;
  }

  return answer;
}

//  프로그래머스 - 다른 사람의 풀이
//  제곱근이 정수면 약수의 갯수가 홀수 라는 댓글을 봄
//    if (Number.isInteger(Math.sqrt(i)))
