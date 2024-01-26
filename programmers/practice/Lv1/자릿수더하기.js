//  자릿수 더하기
//  정확성: ⭕
//  시간: 5분

function solution(n) {
  let answer = 0;
  String(n)
    .split("")
    .map((x) => {
      answer += Number(x);
    });
  return answer;
}

//  reduce() 사용해봄
//  reduce 공식문서랑 gpt 참고함
function solution(n) {
  let answer = 0;
  answer = String(n)
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);
  return answer;
}
