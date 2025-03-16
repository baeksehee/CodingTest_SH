//  서로 다른 부분 문자열의 개수
//  정확성: ❌
//  시간: 15 분

// 내 코드 1
// 강의 자료에서 입력값 가지고 오기 복사함
// Set() 을 사용해야 된다고 파악
const fs = require("fs");
let lines = fs.readFileSync(0).toString();

let len = 1;
let set = Set();

while (len <= lines.length) {
  for (let i = 0; i <= lines.length - len; i++) {
    set.add(lines.slice(i, i + len));
  }
}

console.log(set.size());

// 내 코드 2
// 시간 초과
// Set 생성 방법 수정
const fs = require("fs");
let lines = fs.readFileSync(0).toString().split("\n");

let str = lines[0];
let len = 1;
let set = new Set();

while (len <= str.length) {
  for (let i = 0; i <= str.length - len; i++) {
    set.add(str.slice(i, i + len));
  }
}

console.log(set.size());

// 내 코드 3
// 강의 자료에서 입력값 가지고 오기 복사함
const fs = require("fs");
let lines = fs.readFileSync(0).toString().split("\n");

let str = lines[0];
let len = 1;
let set = new Set();

while (len <= str.length) {
  for (let i = 0; i <= str.length - len; i++) {
    set.add(str.slice(i, i + len));
  }
  len++; // 증가를 안 적었어서 시간 초과났었다
}

console.log(set.size); //size 활용법이 틀렸었다
