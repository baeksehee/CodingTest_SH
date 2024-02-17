//  N으로 표현
//  정확성: ❌
//  시간: 60분

//  내 코드
//  해결 가능성이 없는 코드
// 40분 받고
// 9시 54분  10시 13분
// 10시 23분

function solution(N, number) {
  let answer = 0;
  let min = 0;
  let one = 1;

  if (number % N === 0) {
    min = number % N;
  } else {
    min = Math.floor(number / N) + 2 + (number % N);
  }
  // 10시 4분에 깨달음 : number 이 11의 배수인지가 중요한듯ㅋㅋㅋ
  //  이라고 했지만 전혀! 아니었음

  while (number * N >= one * N) {
    let nOne = Number(`${one}` + `1`);
    if (number * N >= nOne) one = nOne;
    else break;
  }

  let minus = N * one;

  console.log(minus);

  let rest = N * number - minus;

  console.log(rest);

  answer = min > 8 ? -1 : min;

  return answer;
}
