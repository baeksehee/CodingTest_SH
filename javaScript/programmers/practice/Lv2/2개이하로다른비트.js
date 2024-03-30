//  2 개 이하로 다른 비트
//  정확성: ❌ 시간초과
//  시간: 35분
//  아쉬운점: 비트에 대한 이해도, 문제가 준 홀수 짝수의 차이의 힌트를 알아차리지 못함

// 내 코드1
//  ❌` 시간 초과 !
//  조금만 고치면 될 듯
function solution(numbers) {
  function find(number) {
    let result = number + 1;
    let count = 0;

    while (count !== 1 && count !== 2) {
      count = 0;
      let numberStr = number.toString(2);
      let resultStr = result.toString(2);

      let zero = resultStr.length - numberStr.length;

      //    gpt에게 물어봐서 repeat로 0을 앞에 더해봤는데도 시간초과! 별 상관 없는 거였군
      //   for (let i = 0; i < zero; i++) {
      //     numberStr = "0" + numberStr;
      //   }

      resultStr.split("").map((e, i) => {
        if (numberStr[i] !== resultStr[i]) {
          count++;
        }
      });

      result++;
    }
    return --result;
  }

  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    answer.push(find(numbers[i]));
  }
  return answer;
}

//자바스크립트/프로그래머스
//[JS] 두개 이하로 다른 비트
//2023. 6. 13. 17:11 -tistory
function solution(numbers) {
  return numbers.map((e) => {
    if (e % 2 === 0) return e + 1;
    else {
      let str = "0" + e.toString(2);
      let idx = str.lastIndexOf("0");
      return parseInt(str.substring(0, idx) + "10" + str.substring(idx + 2), 2);
    }
  });
}

//  복습 코드
//  ❌ -> ⭕
//  짝수의 패턴은 알았지만 홀수의 패턴을 .. 찾지 .. 기억하지 못함
//  홀수 맨 뒤에서부터 0을 찾아야 최소이면서 비트가 1~2개 다른 숫자를 찾을 수 있었음
//  고친 코드의 아쉬운점 시간 복잡도
function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];

    if (num % 2 == 0) {
      answer.push(num + 1);
      continue;
    } else {
      let n = num.toString(2);
      n = "0" + n;
      //  이 부분!
      n = n.split("").reverse();
      let index = n.indexOf("0");
      n[index - 1] = "0";
      n[index] = "1";
      n = n.reverse().join("");
      answer.push(parseInt(n, 2));
    }
  }

  return answer;
}
