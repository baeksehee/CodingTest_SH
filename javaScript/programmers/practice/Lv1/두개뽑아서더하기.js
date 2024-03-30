//  두 개 뽑아서 더하기
//  시간: 15분
//  정확성: ⭕
//  Set을 이용하려고 함. 하지만 어떻게 사용하는지 까먹음 검색함
//  Set이 배열이 아니라는 걸 까먹음 배열로 바꾸는 법을 검색함
//  두 번의 검색..이 다 한 코드임

function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i != j) {
        answer.push(numbers[i] + numbers[j]);
      }
    }
  }
  let set = new Set(answer);
  answer = Array.from(set).sort((a, b) => a - b);
  return answer;
}
