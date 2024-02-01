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
