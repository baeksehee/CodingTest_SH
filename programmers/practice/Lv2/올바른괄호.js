//  올바른 괄호
//  정확성: ❌
//  시간: 36

//  내 코드1
//  정확성: ❌
//  시간: 26분

//  문제 풀이 방법
//  배열로 스택을 구현
//  '('를 적다가 만약에 ')'를 만날 때는 앞의 '(' 수 만큼 있어야 함

function solution(s) {
  let answer = true;
  let left = 0;
  let right = 0;

  // 이 문제의 기본
  if (s[0] != "(") return false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      if (s[i - 1] !== s[i] && left != right) {
        return false;
      }
      left++;
    } else right++;
  }

  return answer;
}

//  내 코드 2
function solution(s) {
  let answer = true;
  let left = 0;
  let right = 0;

  s.split("").map((e, i) => {
    if (e === "(") left++;
    else right++;
  });

  if (s.length === 1) return false;
  if (s[0] !== "(") return false;
  if (s[s.length - 1] !== ")") return false;
  if (s.length % 2 !== 0) return false;
  if (left != right) return false;

  return answer;
}

//  내 코드3
function solution(s) {
  let answer = true;
  let left = 0;
  let right = 0;

  let arr = s.split("");

  if (arr.length === 1) return false;
  if (arr[0] === ")") return false;

  arr.map((e, i) => {
    if (e === ")") {
      right++;
    } else {
      if (left !== right) return false;
      left++;
    }
  });

  if (left !== right) return false;
  return answer;
}

//  [프로그래머스 Javascript] 올바른 괄호
//  DO YEON KIM
//  https://velog.io/@eldoradodo/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-JavaScript-%EC%98%AC%EB%B0%94%EB%A5%B8-%EA%B4%84%ED%98%B8
//  거의 완전 참고한 코드
//  개념 이해가 완전히 필요하구나
//  미묘한 차이로도 효율성 테스트가 떨어지다니 냉정함

function solution(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? (count += 1) : (count -= 1);
    if (count < 0) {
      break;
    }
  }

  return count === 0 ? true : false;
}
