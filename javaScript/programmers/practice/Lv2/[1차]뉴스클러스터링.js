//  [1차] 뉴스 클러스터링
//  정확성: ❌
//  시간: 1시간

//  내 코드 1
//  교집합 / 합집합 = J (str1, str2)
//  공집합(집합에 원소가 없을 때)일 때 1로 반환
//  A ∩ B는 원소 "1"을 min(3, 5)인 3개, 합집합 A ∪ B는 원소 "1"을 max(3, 5)인 5개 가지게 된다.
function solution(str1, str2) {
  let answer = 0;
  let alphabet = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];

  let string1 = str1.toLowerCase().split("");
  let string2 = str2.toLowerCase().split("");
  let string1Leng = string1.length;
  let string2Leng = string2.length;

  let string1Arr = [];
  let string2Arr = [];

  while (string1Leng > 0) {
    string1Arr.push(`${string1.shift()}${string1.shift() || ""}`);
    string1Leng -= 2;
  }

  while (string2Leng > 0) {
    string2Arr.push(`${string2.shift()}${string2.shift() || ""}`);
    string2Leng -= 2;
  }

  string1Arr = string1Arr.filter(
    (e) => alphabet.includes(e[0]) && alphabet.includes(e[1])
  );

  string2Arr = string2Arr.filter(
    (e) => alphabet.includes(e[0]) && alphabet.includes(e[1])
  );

  let cross = [];
  let plus = [];

  //  A ∩ B는 원소 "1"을 min(3, 5)인 3개, 합집합 A ∪ B는 원소 "1"을 max(3, 5)인 5개 가지게 된다.
  //  구현 못하겠음

  return answer;
}

//  다른 사람 코드 보고 연습
// [프로그래머스/Javascript] 뉴스 클러스터링
//  Posted by Kyun2da on July 5, 2020

// 특수 문자가 들어있는 경우는 그 글자 쌍을 버린다.
// 예를 들어 "ab+"가 입력으로 들어오면, "ab"만 다중집합의 원소로 삼고,
// "b+"는 버린다.
//  문제 이 부분을 이해하지 못했음
//  abcd 이렇게 있으면 ab cd 이렇게 되는 줄 ab bc cd 이렇게 되는 거였음!!

//  교집합 / 합집합 = J (str1, str2)
//  공집합(집합에 원소가 없을 때)일 때 1로 반환
//  A ∩ B는 원소 "1"을 min(3, 5)인 3개, 합집합 A ∪ B는 원소 "1"을 max(3, 5)인 5개 가지게 된다.

function solution(str1, str2) {
  let alphabet = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];

  let string1 = str1.toLowerCase().split("");
  let string2 = str2.toLowerCase().split("");
  let string1Leng = string1.length;
  let string2Leng = string2.length;

  let string1Arr = [];
  let string2Arr = [];

  for (let i = 0; i < string1Leng; i++) {
    if (alphabet.includes(string1[i]) && alphabet.includes(string1[i + 1])) {
      string1Arr.push(string1[i] + string1[i + 1]);
    }
  }

  for (let i = 0; i < string2Leng; i++) {
    if (alphabet.includes(string2[i]) && alphabet.includes(string2[i + 1])) {
      string2Arr.push(string2[i] + string2[i + 1]);
    }
  }

  let union = [];
  let inter = [];

  for (let i = 0; i < string2Arr.length; i++) {
    if (string1Arr.indexOf(string2Arr[i]) >= 0) {
      inter.push(string1Arr.splice(string1Arr.indexOf(string2Arr[i]), 1)); // string2Arr 원소 중에 같은 거 들어가게 하고 splice로 삭제, splice로 string1Arr를 미리 삭제해줘야 합집합에 특정 똑같은 원소 수가 다중집합에 만족함/ (1, 1) (1) 이라면 (1, 1)로 되게!
    }
    union.push(string2Arr[i]); // 여기는같은 교집합 집어넣는거!
  }

  for (let i = 0; i < string1Arr.length; i++) {
    union.push(string1Arr[i]);
  }

  if (inter.length === 0 && union.length === 0) {
    return 65536;
  }
  return parseInt(65536 * (inter.length / union.length));
}
