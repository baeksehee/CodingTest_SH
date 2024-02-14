//  방문 길이
//  정확성: ❌
//  시간: 1시간 넘게

//  내 코드1
//  중복된 길이 빼는 것을 못하겠음!!
function solution(dirs) {
  let answer = 0;
  let me = [0, 0];
  let startPoint = [];
  let endPoint = [];
  let minus = 0;

  let queue = dirs.split("");
  const udlr = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  while (queue.length > 0) {
    startPoint.push([me[0], me[1]]);
    let dir = queue.shift();
    let udlrX = udlr[dir][0];
    let udlrY = udlr[dir][1];
    let newMX = me[0] + udlrX;
    let newMY = me[1] + udlrY;
    if (newMX > -6 && newMX < 6 && newMY > -6 && newMY < 6) {
      me[0] += udlrX;
      me[1] += udlrY;
      answer++;
    }
    endPoint.push([me[0], me[1]]);
  }

  for (let i = 0; i < startPoint.length; i++) {
    let targetStartPoint = startPoint.slice(0, i);
    let targetEndPoint = endPoint.slice(0, i);
    let sPoint = startPoint[i];
    let ePoint = endPoint[i];
    if (
      targetStartPoint.includes(sPoint) &&
      targetEndPoint.includes(ePoint) &&
      targetStartPoint.indexOf(sPoint) === targetStartPoint.indexOf(ePoint)
    )
      minus++;
  }

  return answer - minus;
}

//  [프로그래머스] 방문 길이 - JavaScript
//  이은빈 EUNBIN
//  velog

function solution(dirs) {
  const direction = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };
  let me = [0, 0];
  //  같은 거리 중복 제거!
  let set = new Set();

  for (let dir of dirs) {
    let newMeX = me[0] + direction[dir][0];
    let newMeY = me[1] + direction[dir][1];

    if (newMeX > 5 || newMeX < -5 || newMeY > 5 || newMeY < -5) continue;

    set.add("" + me[0] + me[1] + newMeX + newMeY);
    //  역방향은 어떻게 하나 생각했었는데 너무 깔끔하네
    set.add("" + newMeX + newMeY + me[0] + me[1]);
    me = [newMeX, newMeY];
  }

  //  역방향까지 들어가 있어서 그래
  return set.size / 2;
}

//  복습 코드
//  ❌

// 11시 42분
//  처음 걸어본 길이
//  500 이하의 dirs 길이로 제한사항은 딱히.. 문제도 그런 느낌임
function solution(dirs) {
  let UDRL = ["U", "D", "R", "L"];
  let d = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let me = [0, 0];
  let record = []; // 걸은 거리 기록

  for (let i = 0; i < dirs.length; i++) {
    let [plusX, plusY] = d[UDRL.indexOf(dirs[i])];
    let newMe = [me[0] + plusX, me[1] + plusY];
    let a = "" + me[0] + newMe[0] + me[1] + newMe[1];
    let b = "" + me[1] + newMe[1] + me[0] + newMe[0];

    if (newMe[0] < -5 && newMe > 5 && newMe[1] > 5 && newMe[1] < -5) {
      me[0] = newMe[0];
      me[1] = newMe[1];
    } else if (
      newMe[0] >= -5 &&
      newMe[0] <= 5 &&
      newMe[1] >= -5 &&
      newMe[1] <= 5 &&
      !record.includes(a) &&
      !record.includes(b)
    ) {
      record.push(a);
      record.push(b);
      me[0] = newMe[0];
      me[1] = newMe[1];
    }
  }

  return record.length / 2;
}

//  고친 코드
//  중복을 없애고 싶다면 set을 꼭 사용해라!
//  시작점 도착점
//  도착점 시작점
//  이 부분 코드가 이상했음
function solution(dirs) {
  let UDRL = ["U", "D", "R", "L"];
  let d = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let me = [0, 0];
  let record = new Set();

  for (let i = 0; i < dirs.length; i++) {
    // console.log(dirs[i]);
    // let [plusX, plusY] =  d[UDRL.indexOf(dirs[i])];
    let newMe = [
      me[0] + d[UDRL.indexOf(dirs[i])][0],
      me[1] + d[UDRL.indexOf(dirs[i])][1],
    ];
    console.log(newMe);
    let a = "" + me[0] + me[1] + newMe[0] + newMe[1];
    let b = "" + newMe[0] + newMe[1] + me[0] + me[1];

    if (newMe[0] < -5 || newMe[0] > 5 || newMe[1] > 5 || newMe[1] < -5)
      continue;
    record.add(a);
    record.add(b);
    me = [newMe[0], newMe[1]];
  }

  return record.size / 2;
}
