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
