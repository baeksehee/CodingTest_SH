//  두 정수 사이의 합
//  정확성: ⭕
//  시간: 5분

//  내 코드
//  실행 시간이 너무 길어~
//  제한 조건 매개변수 수가 크면 실행 시간을 고려해야 하는 구나. .
function solution(a, b) {
  let answer = 0;
  let [fixA, fixB] = [a, b].sort((a, b) => a - b);
  let upNum = fixA;

  while (upNum <= fixB) {
    answer += upNum;
    upNum++;
  }

  return answer;
}

//  프로그래머스 - 다른 사람의 풀이 1
//  수학을 잘해야 만들 수 있는 풀이과정
//  Namlulu 댓글을 보면
//  양 끝의 합 * 양 끝의 합의 개수로 구했다고 함

//  프로그래머스 - 다른 사람의 풀이
//  매개변수에 선언한 거 특이함
function solution(a, b, s = 0) {
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}
