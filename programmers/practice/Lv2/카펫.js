//  카펫
//  정확성:
//  시간: 53분

//  내 코드1
//  정확성: ❌
//  시간: 27분
//  핵심 포인트
//  테두리만 갈색이라는 점
//  어차피 직사각형 단지 가로가 긴 것뿐

function solution(brown, yellow) {
  let answer = [];
  let a = 0; // 가로
  let b = 0; // 세로

  for (let i = 1; i <= yellow; i++) {
    let min = yellow + 1;
    for (let j = 1; j <= yellow; j++) {
      if (i * j === yellow && min >= i + j && i <= j) {
        min = i + j;
        a = j;
        b = i;
      }
    }
  }

  answer.push(a + 2);
  answer.push(b + 2);

  return answer;
}

//  내 코드2
//  정확성: ❌
//  시간: + 25분

function solution(brown, yellow) {
  let answer = [0, 0];
  let num = [];
  let sum = brown + yellow;

  for (let i = 1; i <= sum; i++) {
    if (sum % i === 0) num.push(i);
  }

  if (num.length % 2 === 0) {
    answer[0] = num[num.length / 2];
    answer[1] = num[num.length / 2 - 1];
  } else {
    answer[0] = num[Math.floor(num.length / 2)];
    answer[1] = num[Math.floor(num.length / 2)];
  }

  return answer;
}

//  [프로그래머스 JavaScript] 카펫
//  velog - Do YEON KIM
//  나도 그림 분석은 제대로 했는데 활용을 못했다. .
