//  N개의 최소 공배수
//  정확성: ⭕
//  시간: 30분

function solution(arr) {
  let answer = 0;
  let a = 1;
  let max = Math.max(...arr);
  let ing = true;

  while (ing) {
    let test = a * max;
    let passTest = arr.filter((e) => test % e !== 0);

    if (passTest.length === 0) {
      answer = test;
      ing = false;
    } else a++;
  }
  return answer;
}
