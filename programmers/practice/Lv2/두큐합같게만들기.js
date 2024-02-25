//  두 큐 합 같게 만들기
//  정확성: ❌
//  시간: 40분

//  내 코드 1
function solution(queue1, queue2) {
  let answer = Infinity;
  let goal = 0;
  let length = queue1.length;

  function result(q1, q2) {
    let q1T = 0;
    let q2T = 0;

    q1.forEach((q) => {
      q1T += q;
    });
    q2.forEach((q) => {
      q2T += q;
    });
    // console.log(q1, q2);
    // console.log(q1 === q2);
    if (q1T === q2T) return true;
    return false;
  }

  function dfs(q1, q2, count) {
    // console.log(q1, q2);
    if (result(q1, q2)) {
      answer = Math.min(answer, count);
      return;
    }

    if (count === length) return;

    let oneQ1 = [...q1];
    let oneQ2 = [...q2];

    oneQ2.push(oneQ1.shift());

    dfs(oneQ1, oneQ2, count + 1);

    let twoQ1 = [...q1];
    let twoQ2 = [...q2];

    twoQ1.push(twoQ2.shift());

    dfs(twoQ1, twoQ2, count + 1);
  }

  dfs(queue1, queue2, 0);
  //  queue1이 pop() -> queue2에 push()
  //  queue2이 pop() -> queue1에 push()

  return answer !== Infinity ? answer : -1;
}

//  투포인터 개념을 알아야 풀린다
//  [프로그래머스] 두 큐 합 같게 만들기(javascript)
//  Algorithm/프로그래머스 2022. 8. 31. 01:43 - tistory

function solution(queue1, queue2) {
  let answer = 0;
  let sum1 = queue1.reduce((pre, cur) => pre + cur, 0);
  let sum2 = queue2.reduce((pre, cur) => pre + cur, 0);
  let half = (sum1 + sum2) / 2;
  let queue = [...queue1, ...queue2];
  let q1Idx = 0;
  let q2Idx = queue1.length;

  if ((sum1 + sum2) % 2 != 0) return -1;

  while (answer < queue.length * 3) {
    if (half === sum1) return answer;

    if (sum1 > half) {
      sum1 -= queue[q1Idx % queue.length];
      q1Idx++;
    } else if (sum1 < half) {
      sum1 += queue[q2Idx % queue.length];
      q2Idx++;
    }

    answer++;
  }

  return -1;
}
