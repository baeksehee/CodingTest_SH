//  이진 변환 반복하기
//  정확성: ❌
//  시간: 1시간 넘게 (혼자 풀기 + 답지 보고 이해하기)
//  이진수를 만드는 코드를 적으려고 함
//  사실 이진수 잘 모름
//  이진수 만들어주는 toString()이라는 메서드가 있었음

//   내 코드1

function solution(s) {
  let answer = [];
  let arr = s.split("").map(Number);
  let count = 0;
  let zero = 0;
  let changeTarget = 0;

  function zeroCount() {
    changeTarget = newArr.length + 1;
    arr.map((e, i) => {
      if (e === 0) count++;
    });
    return count > 0 ? arr.filter((e) => e !== 0) : [count, zero];
  }

  function change(length) {
    let num = length % 2;
    let result = "";
    if (num === 0) {
      for (let i = 0; i < num - 1; i++) {
        result += "1";
      }
      result += "0";
    }
  }

  return answer;
}

//  내 코드 2
//  + 19분
function solution(s) {
  let answer = [];
  let arr = s.split("").map(Number);
  let zero = 0;
  let count = 1;

  while (arr.length != [1]) {
    if (arr.includes(0)) {
      arr.map((e) => {
        if (e === 0) zero++;
      });
      arr.filter((e) => {
        e !== 0;
      });
      count++;
    }
    let nonZeroLength = arr.length;
    let num = Math.floor(nonZeroLength / 2);
    arr = [];
    if (nonZeroLength % 2 === 0) {
      for (let i = 0; i < nonZeroLength - 1; i++) {
        arr.push(1);
      }
      arr.push(0);
    } else {
      for (let i = 0; i < nonZeroLength; i++) {
        arr.push(1);
      }
    }
  }

  if ((arr = [1])) return [zero, count];

  return answer;
}

//  velog [프로그래머스] 이진 변환 반복하기 / JavaScript / Level 2
//  KimYoungWoong

function solution(s) {
  let answer = [0, 0];

  while (s.length > 1) {
    let sLength = s.length;
    s = s.split("0").join("");
    answer[0]++;
    answer[1] += sLength - s.length;
    s = s.length.toString(2);
  }

  return answer;
}

//  프로그래머스 - 다른 사람의 풀이
//  gpt에게 물어보니
//  '/0/g'는 정규식이라고 함
//  / 는 정규표현식의 시작과 끝을
//  g 정규표현식이 전체 문자열에서 모든 발생을 찾아야함을
//  그렇게하니 진짜 쉬운 코드다
//  match는 생각 못함!
