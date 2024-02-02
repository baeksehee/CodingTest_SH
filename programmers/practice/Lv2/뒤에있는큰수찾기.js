//  뒤에 있는 큰 수 찾기
//  정확성: ❌
//  시간:

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
