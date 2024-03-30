//  자연수 뒤집어 배열로 만들기
//  정확성: ⭕
//  시간: 7분

function solution(n) {
  let answer = [];
  answer = String(n).split("").reverse().map(Number);
  return answer;
}
