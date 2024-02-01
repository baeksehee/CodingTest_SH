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
