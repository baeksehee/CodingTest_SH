//  [3차]압축
//  정확성: ❌
//  시간: 아주 많이

//  내 코드1
//  처음에 객체로 접근함 이상했었음

//  6시 42분
//  Object search 함..
function solution(msg) {
  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "N",
    "M",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let answer = [];
  let w = 0;
  let c = 1;
  msg = msg.split("");

  while (c < msg.length) {
    let word = String(msg.slice(w, c));

    while (alphabet.includes(word)) {
      if (alphabet.includes(word + String(msg[c]))) {
        c++;
        word = String(msg.slice(w, c));
      } else break;
    }

    answer.push(alphabet.indexOf(word) + 1);
    let newWord = word + msg[c];
    alphabet.push(newWord);
    w = c;
    c = c + 1;
  }

  return answer;
}

//  다른 사람 풀이 보고 연습
//[프로그래머스] [3차] 압축 - JavaScript
//Dec 08, 2022 LeeJam

function solution(msg) {
  let words = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let word = "";
  let answer = [];

  for (let i = 0; i < msg; i++) {
    word += msg[i];

    if (!words.includes(word)) {
      words.push(word);
      answer.push(words.indexOf(word.slice(0, -1)) + 1);
      word = msg[i];
    }
  }

  if (word) answer.push(words.indexOf(word) + 1);
  return answer;
}

//  복습코드
//  ❌
//  while에서 안 나감 ㅎㅎ

function solution(msg) {
  let answer = [];
  let words = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  while (msg.length > 0) {
    let now = msg[0];
    let index = 1;
    let include = true;

    while (include && index <= msg.length) {
      if (words.includes(msg.slice(0, index + 1))) {
        now = msg.slice(0, index + 1);
        index = index + 1;
      } else {
        answer.push(words.indexOf(now) + 1);
        words.push(msg.slice(0, index + 1));
        msg = msg.slice(index);
        include = false;
      }
    }
  }

  return answer;
}

//  복복습
//  ⭕
//  while 문과 shift를 잘 사용함 ! 그리고 undefined까지
function solution(msg) {
  let answer = [];
  let words = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  msg = msg.split("");

  while (msg.length > 0) {
    let word = msg.shift();
    while (words.includes(word + msg[0])) {
      word += msg.shift();
    }
    answer.push(words.indexOf(word) + 1);
    if (msg[0] != undefined) {
      words.push(word + msg[0]);
    }
  }

  return answer;
}
