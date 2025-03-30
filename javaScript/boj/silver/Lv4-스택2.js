// 스택 2
// 시간: 20분
// 결과: 틀렸습니다

// 내 코드1
let fs = require("fs");
let lines = fs.readFileSync(0).toString().split("\n");

let N = Number(lines[0]);
let stack = [];

for (let i = 1; i <= N; i++) {
  let target = lines[i];
  if (target.length > 1) {
    let [command, num] = target.split(" ").map(Number); // command 영어로 검새함 변수이름
    stack.push(num);
  } else {
    if (target == "2") {
      if (stack.length > 0) {
        console.log(stack.pop());
      } else {
        console.log(-1);
      }
    } else if (target == "3") {
      console.log(stack.length);
    } else if (target == "4") {
      if (stack.length == 0) console.log(1);
      else console.log(0);
    } else if (target == "5") {
      if (stack.length > 0) console.log(stack[-1]);
      else console.log(-1);
    }
  }
}

// 내 코드2
// 고친 부분: stack[-1] -> stack.at(-1)
// 결과: 시간 초과
let fs = require("fs");
let lines = fs.readFileSync(0).toString().split("\n");

let N = Number(lines[0]);
let stack = [];

for (let i = 1; i <= N; i++) {
  let target = lines[i];
  if (target.length > 1) {
    let [command, num] = target.split(" ").map(Number); // command 영어로 검새함 변수이름
    stack.push(num);
  } else {
    if (target == "2") {
      if (stack.length > 0) {
        console.log(stack.pop());
      } else {
        console.log(-1);
      }
    } else if (target == "3") {
      console.log(stack.length);
    } else if (target == "4") {
      if (stack.length == 0) console.log(1);
      else console.log(0);
    } else if (target == "5") {
      if (stack.length > 0) console.log(stack.at(-1));
      else console.log(-1);
    }
  }
}

// 내 코드3
// 고친 부분: 정답 값을 console.log 로 조건문마다 출력하는는 것이 아닌
// 결과 배열을 만들어 push 후 마지막에 한 번 join 하여 출력하기
// 결과: 맞았습니다!

let fs = require("fs");
let lines = fs.readFileSync(0).toString().split("\n");

let N = Number(lines[0]);
let stack = [];
let result = [];

for (let i = 1; i <= N; i++) {
  let target = lines[i];
  if (target.length > 1) {
    let [command, num] = target.split(" ").map(Number); // command 영어로 검새함 변수이름
    stack.push(num);
  } else {
    if (target == "2") {
      if (stack.length > 0) {
        result.push(stack.pop());
      } else {
        result.push(-1);
      }
    } else if (target == "3") {
      result.push(stack.length);
    } else if (target == "4") {
      if (stack.length == 0) result.push(1);
      else result.push(0);
    } else if (target == "5") {
      if (stack.length > 0) result.push(stack.at(-1));
      else result.push(-1);
    }
  }
}

console.log(result.join("\n"));
