//  내적
//  정확성: ⭕
//  시간: 2분

//  내 코드
//  굳
function solution(a, b) {
  let answer = 0;
  a.map((e, i) => {
    answer += e * b[i];
  });
  return answer;
}

//  프로그래머스 - 다른 사람의 풀이
//  reduce를 활용했어서 나도 해봄
function solution(a, b) {
  let answer = 0;
  //    영어 이렇게 쓰는 거 맞나? prev, curr
  answer = a.reduce((prev, curr, i) => (prev += curr * b[i]), 0);
  return answer;
}
