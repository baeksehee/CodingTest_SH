//  없는 숫자 더하기
//  정확성: ⭕
//  시간: 10분

//  내 코드
//  쉬운 문제지만 정말 풀이가 안 좋은 코드인 듯
function solution(numbers) {
  let answer = 0;
  let total = 45;
  let arrTotal = 0;

  numbers.map((e) => {
    arrTotal += e;
  });

  answer = total - arrTotal;

  return answer;
}

//  프로그래머스 - 다른 사람 풀이
//  45 - reduce() 활용해서 배열의 값 더한 것
