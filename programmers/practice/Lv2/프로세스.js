//  프로세스
//  정확성: ❌
//  시간: 50분

//  내 코드1
//  음수 변환해서 풀려고 했는데
//  index 활용을 해야 하는구나
function solution(priorities, location) {
  let answer = 0;
  let target = priorities[location];

  let first = Math.max(...priorities);
  let ing = true;
  if (target === first) return 1;

  priorities[location] = -priorities[location];

  while (ing) {
    first = Math.max(...priorities.map((e) => Math.abs(e)));

    if (priorities[0] < 0 && Math.abs(priorities[0]) === first) {
      ing = false;
      return answer;
    }

    if (priorities[0] != first) {
      let num = priorities.shift();
      priorities.push(num);
    }

    if (priorities[0] == first) {
      priorities.shift();
    }

    answer++;
  }

  return answer;
}

//  velog-[프로그래머스] 프로세스 문제 풀이 - JavaScript
//  Haizel
function solution(priorities, location) {
  let prioritiesArray = [...priorities];
  let prioritiesIndex = priorities.map((_, i) => i);

  let out = [];

  while (prioritiesArray.length > 0) {
    if (out.at(-1) === location) {
      break;
    }
    let max = Math.max(...prioritiesArray);

    if (prioritiesArray[0] == max) {
      out.push(prioritiesIndex[0]);
    } else {
      prioritiesArray.push(prioritiesArray[0]);
      prioritiesIndex.push(prioritiesIndex[0]);
    }
    prioritiesArray.shift();
    prioritiesIndex.shift();
  }

  return out.length;
}
