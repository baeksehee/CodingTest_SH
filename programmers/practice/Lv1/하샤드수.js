//  하샤드 수
//  정확성: ⭕
//  시간:  30분
//  조금 참고함. .

function solution(x) {
  let answer = true;
  let fixX = x;
  let sum = 0;

  do {
    sum += x % 10;
    //  밑 코드가 이해가 안 됐었음
    //  일의 자릿수 그 밑은 while 문에서 걸리게 하기 위해서!
    x = Math.floor(x / 10);
  } while (x > 0);

  if (fixX % sum !== 0) {
    answer = false;
  }
  ㅎ;
  return answer;
}
