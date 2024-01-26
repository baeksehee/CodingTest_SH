//  수박수박수박수박수박수?
//  정확성: ⭕
//  시간: 2분

//  내 코드
function solution(n) {
  let answer = "";
  let count = 1;

  while (count <= n) {
    count % 2 !== 0 ? (answer += "수") : (answer += "박");
    count++;
  }

  return answer;
}

//  프로그래머스 - 다른 사람의 풀이
//  참고해서 조금 더 깔끔한 코드를!

function solution(n) {
  let answer = "";
  let count = 1;

  while (count <= n) {
    answer += count % 2 !== 0 ? "수" : "박";
    count++;
  }

  return answer;
}

//  프로그래머스 - 다른 사람의 풀이
//  '수박'.repeat() + 홀수이냐 짝수이냐에 따라
//  이런 식으로 풀어나간 사람도 있음
