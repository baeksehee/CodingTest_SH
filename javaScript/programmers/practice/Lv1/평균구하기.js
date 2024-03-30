//  평균 구하기
//  정확성: ⭕
//  시간: 1분 30초

function solution(arr) {
  let answer = 0;
  let total = 0;

  arr.map((x) => {
    total += x;
  });

  answer = total / arr.length;

  return answer;
}
