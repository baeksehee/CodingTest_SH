// 제로
// 시간: 20분
// 결과: 틀렸습니다

// 내 코드1
let fs = require("fs");
let lines = fs.readFileSync(0).toString().split("\n");

let target = lines.slice(1, lines.length).map(Number); // reserve => reverse 로 수정 검색 찬스!
let stack = [];

for (let i = 0; i < target.length; i++) {
  let num = target[i];
  if (num === 0) {
    stack.pop();
  } else {
    stack.push(num);
  }
}

console.log(stack.reduce((a, c) => a + c, 0));

// 내 코드2
// 고친 부분: 과하게 reverse 사용, slice 사용 제거
// 결과: 맞았습니다!!

let fs = require("fs");
let lines = fs.readFileSync(0).toString().split("\n").map(Number);

let N = lines[0];
let stack = [];

for (let i = 1; i <= N; i++) {
  let num = lines[i];
  if (num === 0) {
    stack.pop();
  } else {
    stack.push(num);
  }
}

console.log(stack.reduce((a, c) => a + c, 0));
