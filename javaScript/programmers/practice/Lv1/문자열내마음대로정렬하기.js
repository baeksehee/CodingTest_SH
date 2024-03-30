//  문자열 내 마음대로 정렬하기
//  정확성: ❌
//  시간: 1시간..?

function solution(strings, n) {
  let answer = [];
  let target = [];

  for (let i = 0; i < strings.length; i++) {
    target.push(strings[i].slice(n, strings[i].length));
  }

  target.sort();

  for (let i = 0; i < target.length; i++) {
    strings.map((x, j) => {
      if (x.slice(n, x.length) === target[i]) {
        answer.push(x);
      }
    });
  }

  return answer;
}
