//  모음사전
//  정확성: ❌
//  시간: 50분

//  내 코드 1
//  진짜 이상하다
function solution(word) {
  let answer = 0;
  let firstC = 0;
  let result = [];

  while (result != word.split("")) {
    if (result.length === 0) {
      if (firstC === 0) {
        result = ["A", "A", "A", "A", "A"];
      } else if (firstC === 1) {
        result = ["E", "A", "A", "A", "A"];
      } else if (firstC === 2) {
        result = ["I", "A", "A", "A", "A"];
      } else if (firstC === 3) {
        result = ["O", "A", "A", "A", "A"];
      } else if (firstC === 4) {
        result = ["U", "A", "A", "A", "A"];
      }
      firstC++;
      answer = answer + 5;
    } else if (result.length > 1 && result.length < 6) {
      if (result[result.length - 1] === "A") {
        result[result.length - 1] = "E";
      } else if (result[result.length - 1] === "E") {
        result[result.length - 1] = "I";
      } else if (result[result.length - 1] === "I") {
        result[result.length - 1] = "O";
      } else if (result[result.length - 1] === "O") {
        result[result.length - 1] = "U";
      } else if (result[result.length - 1] === "U") {
        result.pop();
      }
      answer++;
    } else if (result.length === 1) {
      result.pop();
    }
    console.log(result);
  }

  return answer;
}

//  프로그래머스 Level 2 - 모음 사전 (JavaScript)
//  May 17, 2022 by Joon Hyeok Han
//  dfs 이 문제가 제일 이해하기 쉬웠음 !! 이제 좀 이해가 되는 것 같기도함

function solution(word) {
  let answer = 0;
  let result = [];
  let str = "";

  function dfs(str, length) {
    const vowels = ["A", "E", "I", "O", "U"];
    if (length === str.length) {
      result.push(str);
      return;
    }

    vowels.forEach((vowel) => {
      dfs(str + vowel, length);
    });
  }
  for (let i = 1; i <= 5; i++) dfs(str, i);
  answer = result.sort().indexOf(word) + 1;

  return answer;
}

//  복습 코드
//  생략
//  틀린 이유 dfs라는 걸 알았는데 적지 못함
//  규칙 찾아서 하는 거 하려고 했는 reduce 사용법 까먹음

//  복복습 코드
// [1번째 방법] 12시 39분 - 12시 53분 (14분)
// ⭕
function solution(word) {
  let answer = [];
  let alphabet = ["A", "E", "I", "O", "U"];

  function dfs(w, nowl, l) {
    if (nowl === l) {
      answer.push(w);
      return;
    }

    for (let i = 0; i < 5; i++) {
      dfs(w + alphabet[i], nowl + 1, l);
    }
  }

  for (let i = 1; i <= 5; i++) dfs("", 0, i);
  let ex = ["A", "B", "AB"];

  // console.log(answer.sort());
  // console.log(answer[answer.length - 1]);
  return answer.sort().indexOf(word) + 1;
}

//  복복습 두 번째 방식 코드
//  이거 잘 모르겠음 규칙
//  [2번째 방법] 규칙 찾아서 하기 12:55 -
//  30분 +
//  word.length === 1은 1
//  word.length === 2은 ["A", "E", "I", "O", "U"].length + 1 = 6
//  word.length === 3은 (["A", "E", "I", "O", "U"].length + 1) * 5 + 1  = 31
//  word.length === 4은 ((["A", "E", "I", "O", "U"].length + 1) * 5 + 1) * 5 + 1 = 156
//  word.length === 5 는 156 * 5 + 1 = 781
function solution(word) {
  let w = ["A", "E", "I", "O", "U"];
  let c = [781, 156, 31, 6, 1];

  return (
    word.split("").reduce((pre, arr, i) => pre + w.indexOf(arr) * c[i], 0) +
    word.length
  );
}
