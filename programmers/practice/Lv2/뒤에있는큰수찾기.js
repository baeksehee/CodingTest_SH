//  뒤에 있는 큰 수 찾기
//  정확성: ❌
//  시간: 20분

//  내 코드 1
//  시간 초과
function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        answer.push(numbers[j]);
        break;
      }
      if (j === numbers.length - 1) answer.push(-1);
    }
  }

  answer.push(-1);
  return answer;
}

//  복습 코드
//  시간초과

function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    let target = numbers.slice(i + 1, numbers.length);
    if (target.length === 0) {
      answer.push(-1);
      break;
    }
    for (let j = 0; j < target.length; j++) {
      if (numbers[i] < target[j]) {
        answer.push(target[j]);
        break;
      } else if (j === target.length - 1) answer.push(-1);
    }
  }
  return answer;
}
