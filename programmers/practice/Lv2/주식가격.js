//  주식가격
//  정확성: ❌
//  시간: 40분

//  내 코드1

//  stack/queue 문제인데
//  그걸로 안 하고 풀려고 했더니 처참
//  정확성:❌

function solution(prices) {
  let answer = new Array(prices.length).fill(0);

  for (let i = 0; i < prices.length; i++) {
    let after = prices.slice(i + 1);
    let min = prices[i];
    let afterMin = Math.min(...after) === Infinity ? -1 : Math.min(...after);

    if (min > afterMin) {
      let afterMinIndex = after.indexOf(afterMin);
      answer[i] = afterMinIndex + 1;
    } else answer[i] = after.length;
  }

  return answer;
}

//  [프로그래머스 JavaScript] 주식가격
//  DO YEON KIM - velog 참고
//  stack X

function solution(prices) {
  let answer = [];

  for (let i = 0; i < prices.length; i++) {
    // let after = prices.slice(i + 1); // slice 사용해서 변수로 length 길이 체크하고 했는데 시간 초과! 하나 배움요!
    let count = 0;

    for (let j = i + 1; j < prices.length; j++) {
      count++;
      if (prices[i] > prices[j]) break;
    }

    answer.push(count);
  }

  return answer;
}
