//  나머지가 1이 되는 수 찾기
//  정확성: ⭕
//  시간: 2분

function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 1) {
      answer = i;
      return answer;
    }
  }
  return answer; // 여기 없애도 되네
}
