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
function solution(brown, yellow) {
  var answer = [];
  for (var y = 3; y <= (brown + yellow) / y; y++) {
    var x = Math.floor((brown + yellow) / y);
    if ((x - 2) * (y - 2) === yellow) {
      break;
    }
  }

  return [x, y];
}

//  복습 풀이 ⭕
//  but 실행 시간이 초과 직전
//  for문 두 번 사용해서
function solution(brown, yellow) {
  for (let i = 1; i <= yellow; i++) {
    for (let j = 1; j <= yellow; j++) {
      if (i * j === yellow && i >= j && i * 2 + j * 2 + 4 === brown)
        return [i + 2, j + 2];
    }
  }
}
