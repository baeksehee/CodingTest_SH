//  기능 개발
//  정확성: ❌
//  시간: 40분

function solution(progresses, speeds) {
  let answer = [];

  while (progresses.length > 0) {
    let pass = 0;

    for (let i = 0; i < progresses.length; i++) {
      if (progresses[i] < 100) progresses[i] = progresses[i] + speeds[i];
    }

    while (progresses[0] >= 100) {
      pass++;
      progresses.shift();
      if (progresses[0] >= 100) continue;
      answer.push(pass);
    }
  }

  return answer;
}

//  진짜 아깝게 통과하지 못함
//  speeds.shift()를 안 해서
function solution(progresses, speeds) {
  let answer = [];

  while (progresses.length > 0) {
    let pass = 0;

    for (let i = 0; i < progresses.length; i++) {
      if (progresses[i] < 100) progresses[i] = progresses[i] + speeds[i];
    }

    while (progresses[0] >= 100) {
      pass++;
      progresses.shift();
      speeds.shift();
      if (progresses[0] >= 100) continue;
      answer.push(pass);
    }
  }

  return answer;
}

//  복습 코드 ⭕
//  17분

function solution(progresses, speeds) {
  let answer = [];

  while (progresses.length > 0) {
    let count = 0;

    //   for(let i = 0; i < progresses.length; i++) {
    //     progresses[i] += speeds[i];
    // } 이렇게 for문으로 돌렸을 때 에러남
    progresses.map((e, i) => {
      progresses[i] = e + speeds[i];
    });

    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count++;
    }

    if (count > 0) answer.push(count);
  }

  return answer;
}
