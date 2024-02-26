//  마법의 엘리베이터
//  정확성: ❌
//  시간: 40분

//  내 코드 1
//  통과가 안 된 이유를 생각해보니!
//  앞의 자리 수가 9 이고 뒤에 자리 수를 ⬆️했을 경우 앞의 수가 0이되는 그런 자연스러움이 부족해서인듯
//  split()으로 배열을 만들것이 아니라
//  정말 수로 접근했어야 했나보다!
function solution(storey) {
  let answer = 0;
  let leng = storey.toString().length;

  storey = storey.toString().split("").map(Number);

  while (leng > 1) {
    if (storey[leng - 1] > 5) {
      answer += 10 - storey[leng - 1];
      storey[leng - 2] += 1;
    } else if (storey[leng - 1] < 5) {
      answer += storey[leng - 1];
    } else if (storey[leng - 1] === 5) {
      if (leng === 1) {
        answer += 5;
      } else {
        if (storey[leng - 2] >= 5) {
          answer += 10 - storey[leng - 1];
          storey[leng - 2] += 1;
        } else {
          answer += storey[leng - 1];
        }
      }
    }

    storey[leng - 1] = 0;

    leng--;
  }

  answer += storey[0];
  return answer;
}

//  참고
//  [프로그래머스] 마법의 엘레베이터 JS
//   Won Tae·2023년 4월 10일
function solution(storey) {
  let answer = 0;

  while (storey > 0) {
    let cur = storey % 10;
    let next = (storey / 10) % 10;

    if (cur > 5) {
      answer += 10 - cur;
      storey += 10;
    } else if (cur < 5) {
      answer += cur;
    } else if (cur === 5) {
      answer += 5;
      storey += next > 5 ? 10 : 0;
    }

    storey = parseInt(storey / 10);
  }

  return answer;
}
