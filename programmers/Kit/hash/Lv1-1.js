//  완주하지 못한 선수
//  정확성: ⭕
//  효율성: ❌

//  내 코드 -> 효율성에서 실패

function solution(participant, completion) {
  for (let i = 0; i < completion.length; i++) {
    const index = participant.indexOf(`${completion[i]}`);
    participant.splice(index, 1);
  }

  const answer = participant.toString();
  return answer;
}

//  다른 사람의 풀이

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}

//  프로그래머스 - 다른 사람의 풀이

function solution(participant, completion) {
  //  map 생성
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    // 이름을 저장
    let a = participant[i],
      b = completion[i];

    // map에는 participant[i]이름 키들이 기본적으로 1의 값을 가짐
    // participant 동명이인일 때는 2 이상의 값을 가짐
    map.set(a, (map.get(a) || 0) + 1);
    // completion 즉, 완전한 배열에 이름이 있어야 동일한 키값에 -1을 할 수있음
    // 만약에 participant에 있던 배열 요소 1개가 completion 배열 요소에 없으면 +1이라는 값을 계속 유지함
    // 반면, completion에 배열 요소에 있으면 +1이었던 값이 0으로 됨
    // 동명이인이 있는 배열 설명은 생략

    //  map.get(a) || 0 은 map.get(a)가 undefined인 경우 0이라는 기본값 제공임
    map.set(b, (map.get(b) || 0) - 1);
  }

  // k = key
  // v = value
  for (let [k, v] of map) {
    // 0초과면 완주하지 못한 사람
    if (v > 0) return k;
  }

  return "nothing";
}
