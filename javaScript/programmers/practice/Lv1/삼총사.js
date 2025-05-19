//  삼총사

//  for문으로 풀기기
//  정확성: ⭕
//  시간: 40분
function solution(number) {
  let answer = 0;
  let length = number.length;

  for (let i = 0; i < length - 2; i++) {
    let sum = number[i];
    for (let j = i + 1; j < length - 1; j++) {
      sum += number[j];
      for (let k = j + 1; k < length; k++) {
        let result = sum + number[k];
        if (result === 0) answer++;
        if (k == length - 1) sum -= number[j];
      }
    }
  }

  return answer;
}

// 재귀함수로 풀기
// 정확성: ⭕
// 시간: 50분

function solution(number) {
  let answer = 0;
  // let result = [];
  let selected = [];
  const length = number.length;

  function DFS(index, selected) {
    if (index == length && selected.length < 3) return; //😁요 조건문이랑

    if (selected.length === 3) {
      // result.push(selected);
      if (selected[0] + selected[1] + selected[2] == 0) answer++;
      return;
    }
    DFS(index + 1, [...selected, number[index]]);
    // 😁 여기에 pop을 넣었어야 했나 고민이 많았습니다.
    DFS(index + 1, selected);
  }

  DFS(0, selected);

  return answer;
}
