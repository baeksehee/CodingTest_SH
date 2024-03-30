//  연속된 부분 수열의 합
//  정확성: ❌
//  시간: 20분
//  연습문제라는 것은 페이크임
//  시간복잡도 때문에 더 어려움

//  내 코드1
//  10: 48
//  k가 되는 부분 수열이 여러 개일 때
//  길이가 짧은 수열!
//  짧은 수열이 여러가지면 앞에 수열!

//  수열의 길이가 1인 경우 그 수열의 index, index
function solution(sequence, k) {
  let answer = [];
  let answers = [];
  let i = 0;

  for (let i = 0; i < sequence.length; i++) {
    let num = sequence[i];
    let idx = i;
    while (num < k) {
      idx += 1;
      num += sequence[idx];
    }
    if (num === k) answers.push([i, idx]);
    if (num > k) continue;
  }

  if (answers.length > 0) {
    let leng = [];
    for (let i = 0; i < answers.length; i++) {
      leng.push(answers[i][1] - answers[i][0]);
    }

    let min = Math.min(...leng);
    // console.log(min);
    let idx = leng.indexOf(min);

    answer = answers[idx];
  }

  return answer;
}
