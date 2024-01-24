//  체육복
//  코드 실행: ⭕
//  정확성: ❌

//  (1) lost, reserve 두 배열 모두 없는 학생은 -> 체육
//  (2) lost, reserve 두 배열에 모두 있는 학생은 -> 체육
//  (3) lost에 있지만 reserve에 자신보다 - 1 이거나 자신보다 + 1인 학생이 있을시 -> 체육
//  (4) lost에 있으면서 reserve에 자신보다 -1 이거나 자신보다 + 1인 학생이 없을시에만 체육 못 함

//  틀린 코드 1번째
function solution(n, lost, reserve) {
  let answer = 0;
  let realLost = [...lost];
  let realReserve = [...reserve];

  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      // (2) case 제거
      if (lost[i] === reserve[j]) {
        realLost.splice(i, 1);
        realReserve.splice(j, 1);
      } else if (lost[i] === reserve[j] - 1) {
        realLost.splice(i, 1);
        realReserve.splice(j, 1);
      } else if (lost[i] === reserve[j] + 1) {
        realLost.splice(i, 1);
        realReserve.splice(j, 1);
      }
    }
  }

  answer = n - realLost.length;
  return answer;
}

// 틀린 코드 2번째

function solution(n, lost, reserve) {
  let answer = 0;
  let realLost = [...lost];
  let realReserve = [...reserve];

  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      // (2) case 제거
      if (lost[i] === reserve[j]) {
        realLost.splice(i, 1);
        realReserve.splice(j, 1);
      }

      if (Math.abs(lost[i] - reserve[j]) === 1) {
        realLost.splice(i, 1);
        realReserve.splice(j, 1);
      }
    }
  }

  answer = n - realLost.length;
  return answer;
}
