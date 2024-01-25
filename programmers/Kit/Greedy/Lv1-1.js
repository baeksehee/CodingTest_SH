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

//  틀린 코드 세 번째 (다른 사람의 풀이를 참고해서 고칠 코드)
function solution(n, lost, reserve) {
  let answer = 0;
  let realLost = [...lost];
  let realReserve = [...reserve];

  // lost 이면서 reserve 인 사람은 체육 수업에 참가할 수 있는 사람으로 realLost, realReserve 배열에서 제외
  for (let i = 0; i < realLost.length; i++) {
    if (reserve.includes(realLost[i])) {
      let removeReserveIndex = reserve.indexOf(realLost[i]);
      realLost.splice(i, 1);
      realReserve.splice(removeReserveIndex, 1);
      i--;
    }
  }

  for (let i = 0; i < realLost.length; i++) {
    if (realReserve.includes(realLost[i] - 1)) {
      let removeReserveIndex = reserve.indexOf(realLost[i]);
      realLost.splice(i, 1);
      realReserve.splice(removeReserveIndex, 1);
      i--;
    }
  }

  for (let i = 0; i < realLost.length; i++) {
    if (realReserve.includes(realLost[i] + 1)) {
      let removeReserveIndex = reserve.indexOf(realLost[i]);
      realLost.splice(i, 1);
      realReserve.splice(removeReserveIndex, 1);
      i--;
    }
  }

  answer = n - realLost.length;
  return answer;
}

//  [Kihoon] [프로그래머스]체육복(JavaScript) 코드를 참고
//  URL = https://chamdom.blog/pg1-42862/

//  첫 번째 수정
//  for문 조건문 기준이 lost(옷을 도난 당한 학생).length가 아닌  reserve(여벌의 옷을 가진 학생).length를 기준으로 해야 함

function solution(n, lost, reserve) {
  let answer = 0;
  let realLost = [...lost];
  let realReserve = [...reserve];

  for (let i = 0; i < realReserve.length; i++) {
    if (realLost.includes(realReserve[i])) {
      let removeLostIndex = realLost.indexOf(realReserve[i]);
      realReserve.splice(i, 1);
      realLost.splice(removeLostIndex, 1);
      i--;
    }
  }

  for (let i = 0; i < realReserve.length; i++) {
    if (realLost.includes(realReserve[i] - 1)) {
      let removeLostIndex = realLost.indexOf(realReserve[i]);
      realReserve.splice(i, 1);
      realLost.splice(removeLostIndex, 1);
      i--;
    }
  }

  for (let i = 0; i < realReserve.length; i++) {
    if (realLost.includes(realReserve[i] + 1)) {
      let removeLostIndex = realLost.indexOf(realReserve[i]);
      realReserve.splice(i, 1);
      realLost.splice(removeLostIndex, 1);
      i--;
    }
  }

  answer = n - realLost.length;
  return answer;
}

//  두 번째 수정
//  도난당한 학생의 번호를 + 1, -1 해서 여벌 옷 있는 학생 인덱스 찾는 걸로 수정 (전 코드는 코드 실행에서 통과된 이유를 모르겠음)
function solution(n, lost, reserve) {
  let answer = 0;
  let realLost = [...lost];
  let realReserve = [...reserve];

  for (let i = 0; i < realReserve.length; i++) {
    if (realLost.includes(realReserve[i])) {
      let removeLostIndex = realLost.indexOf(realReserve[i]);
      realReserve.splice(i, 1);
      realLost.splice(removeLostIndex, 1);
      i--;
    }
  }

  for (let i = 0; i < realReserve.length; i++) {
    if (realLost.includes(realReserve[i] - 1)) {
      let removeLostIndex = realLost.indexOf(realReserve[i] - 1);
      realReserve.splice(i, 1);
      realLost.splice(removeLostIndex, 1);
      i--;
    }
  }

  for (let i = 0; i < realReserve.length; i++) {
    if (realLost.includes(realReserve[i] + 1)) {
      let removeLostIndex = realLost.indexOf(realReserve[i] + 1);
      realReserve.splice(i, 1);
      realLost.splice(removeLostIndex, 1);
      i--;
    }
  }

  answer = n - realLost.length;
  return answer;
}

//  세번 째 수정
//  위 블로그 정답 코드를 부분적으로 가지고옴
//  실패
function solution(n, lost, reserve) {
  let answer = 0;

  for (let i = 0; i < reserve.length; i++) {
    if (lost.includes(reserve[i])) {
      let removeLostIndex = lost.indexOf(reserve[i]);
      reserve.splice(i, 1).sort();
      lost.splice(removeLostIndex, 1).sort;
      i--;
    }
  }

  reserve.sort();
  lost.sort();

  //  여기!
  //  splice()는 인덱스 조정이 오류를 야기시킬 수 있기 때문
  //  filter()로 새로운 배열을 만드는게 더 좋은 방법이라고 추천해줌
  //  gpt의 말
  //  lost.splice(removeLostIndex, 1) 부분에서 발생합니다. 루프를 순회하면서 배열을 수정하는 것은 코드의 가독성과 예측성을 낮출 수 있습니다.
  for (let i = 0; i < reserve.length; i++) {
    if (lost.includes(reserve[i] - 1)) {
      lost = lost.filter((v) => v !== reserve[i] - 1);
    } else if (lost.includes(reserve[i] + 1)) {
      lost = lost.filter((v) => v !== reserve[i] + 1);
    }
  }

  answer = n - lost.length;
  return answer;
}

//  다른 사람의 풀이 - 프로그래머스 (이 풀이도 틀린 코드)
//  developersoom , hyojin1234
//  내가 풀려고 했던 의도와 코드가 비슷

/* 
다른 사람의 풀이임
function solution(n, lost, reserve) {
  let answer = n;

  for (let i = 0; i < reserve.length; i++) {
    if (lost.includes(reserve[i])) {
      lost.splice(lost.indexOf(reserve[i]), 1);
      reserve.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < reserve.length; i++) {
    if (lost.includes(reserve[i] - 1)) {
      lost.splice(lost.indexOf(reserve[i] - 1), 1);
      reserve.splice(i, 1);
      i--;
    } else if (lost.includes(reserve[i] + 1)) {
      lost.splice(lost.indexOf(reserve[i] + 1), 1);
      reserve.splice(i, 1);
      i--;
    }
  }
  answer = n - lost.length;
  return answer;
 } 
*/

//  네 번째 수정
//  고친점 1 함수의 매개변수를 그대로 사용 -> 내가 변수선언해서 배열에 다시 할당하니 이름이 헷갈렸음!
//  고친점 2 lost 학생 번호의 - 1 값이 reserve에 있는 학생 번호와 같다면
//  lost 학생 번호 + 1 값이 reserve에 있는 학생 번호와 같다면
//  두 가지 조건은 동일한 for문인데 따로 분리했었음
//  둘을 if...else 문으로 합치니 실패 테스트가 줄어듦

function solution(n, lost, reserve) {
  let answer = 0;

  for (let i = 0; i < reserve.length; i++) {
    if (lost.includes(reserve[i])) {
      let removeLostIndex = lost.indexOf(reserve[i]);
      lost.splice(removeLostIndex, 1);
      reserve.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < reserve.length; i++) {
    if (lost.includes(reserve[i] - 1)) {
      let removeLostIndex = lost.indexOf(reserve[i] - 1);
      lost.splice(removeLostIndex, 1);
      reserve.splice(i, 1);
      i--;
    } else if (lost.includes(reserve[i] + 1)) {
      let removeLostIndex = lost.indexOf(reserve[i] + 1);
      lost.splice(removeLostIndex, 1);
      reserve.splice(i, 1);
      i--;
    }
  }

  answer = n - lost.length;
  return answer;
}

//  고쳐서 정확성 통과⭕ 코드
//  최종적으로 블로그의 코드에서
//  1. sort 사용
//  나랑 매우 비슷한 코드에서
//  2. 매개변수를 따로 변수로 할당하면 이름이 헷갈렸으니 매개변수 그대로 사용
//  3. 동일한 for문이면서 조건만 다른 동일한 목적 블록들 -> 하나의 for문 블록에 묶음
//  세 가지를 합쳐서 코드를 고치니 해결 함!

//  틀린 이유
//  과도한 코드 분리
//  index의 정확성
//  배열을 사용하면서 정렬이 옳바르지 않을 수 있음을 인지하지 못했음 필요에 따라 sort() 사용 권장 -> 객체로 풀었으면 문제 없음

function solution(n, lost, reserve) {
  let answer = 0;

  for (let i = 0; i < reserve.length; i++) {
    if (lost.includes(reserve[i])) {
      let removeLostIndex = lost.indexOf(reserve[i]);
      reserve.splice(i, 1).sort();
      lost.splice(removeLostIndex, 1).sort;
      i--;
    }
  }

  reserve.sort();
  lost.sort();

  for (let i = 0; i < reserve.length; i++) {
    if (lost.includes(reserve[i] - 1)) {
      let removeLostIndex = lost.indexOf(reserve[i] - 1);
      lost.splice(removeLostIndex, 1);
      reserve.splice(i, 1);
      i--;
    } else if (lost.includes(reserve[i] + 1)) {
      let removeLostIndex = lost.indexOf(reserve[i] + 1);
      lost.splice(removeLostIndex, 1);
      reserve.splice(i, 1);
      i--;
    }
  }

  answer = n - lost.length;
  return answer;
}

//  프로그래머스 - 다른 사람의 풀이
//  토르코 , 토르코 , kwak-bs , 유하얀 외 8 명
//  나도 처음에는 객체를 활용한 풀이를 하고 싶었는데
//  객체 활용법을 까먹어서 안 했었다!
//  억지로 배열로 하다 보니 쉽지 않았다.
//  이 코드를 바탕으로 공부해서 객체를 활용한 알고리즘 풀이도 해야지~
/*
function solution(n, lost, reserve) {
    const students = {};
    let answer = 0;
    for(let i = 1; i <= n; i++){
        students[i] = 1;
    }
    lost.forEach(number => students[number] -= 1);
    reserve.forEach(number => students[number] += 1);

    for(let i = 1; i <= n; i++){
        if(students[i] === 2 && students[i-1] === 0){
                students[i-1]++;
                students[i]--;
        } else if(students[i] === 2 && students[i+1] === 0){
                students[i+1]++;
                students[i]--;
        }
    }
    for(let key in students){
        if(students[key] >= 1){
            answer++;
        }
    }
    return answer;
}
*/
