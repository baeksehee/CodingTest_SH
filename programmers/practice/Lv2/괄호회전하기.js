//  괄호 회전하기
//  정확성:
//  시간: 40분 이상

//  내 코드1
function solution(s) {
  let answer = 0;

  let arr = s.split("");

  let rotate = s.length;

  while (rotate > 1) {
    let a = 0; // ()
    let b = 0; // []
    let c = 0; // {}

    arr.map((e, i) => {
      if (e == "(") a += 1;
      if (e == "[") b += 1;
      if (e == "{") c += 1;
      if (e == ")" && a !== 1) a -= 2;
      if (e == "]" && b !== 1) b -= 2;
      if (e == "}" && c !== 1) c -= 2;
    });

    arr.push(arr[0]);
    arr = arr.slice(1, 8);

    a == 1 && b == 1 && c == 1 ? (answer += 1) : (answer += 0);

    rotate--;
  }

  return answer;
}

//  velog-[프로그래머스] 괄호 회전하기 - javascript
//  김지원 코드
//  보고 혼자 작성

function solution(s) {
  if (s.length % 2 === 1) return 0; // 이런 세부적인 조건도 알아서 만족해야 함
  let answer = 0;
  let ok = true;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let nowS = s.slice(i) + s.slice(0, i); //  이 방법 신기하넹
    ok = true; // false로 변경되었을 때 다시 true로 할당

    for (let n of nowS) {
      if (n == "(" || n == "{" || n == "[") stack.push(n);
      else {
        let left = stack.pop();
        if (n === ")" && left === "(") continue;
        if (n === "}" && left === "{") continue;
        if (n === "]" && left === "[") continue;
        ok = false;
        break;
      }
    }

    if (ok) answer++;
  }
  return answer;
}

//  내 복습 코드
//  ❌
//  테스트 코드만 맞음
function solution(s) {
  let answer = 0;
  if (s.length % 2 !== 0) return 0;

  let count = s.length;

  for (let i = 0; i < count; i++) {
    let stack = [];
    s = s.slice(1) + s[0];

    for (let j = 0; j < count; j++) {
      if (s[j] === "(" || s[j] === "[" || s[j] === "{") {
        stack.push(s[j]);
        continue;
      } else {
        if (s[j] === ")" && !stack.includes("(")) break;
        if (s[j] === "}" && !stack.includes("{")) break;
        if (s[j] === "]" && !stack.includes("[")) break;
      }
      if (j === count - 1) answer++;
    }
  }

  return answer;
}
