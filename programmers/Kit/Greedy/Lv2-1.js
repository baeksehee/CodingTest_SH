//  조이스틱
//  정확성: ❌
//  시간: 70분

//  일단 알파벳 length 중에 해당 알파벳 index에 따라서 위로 할 것인지 아래로 할 것인지 정해보자!
//  0~12 ▲ - 다음 알파벳
//  13~25 ▼ - 이전 알파벳
//  name 중 A 아닌 가장 가까운 알파벳을 찾아야 함
//  조이스틱과 커서는 첫번째 위치에 있음

//  name -> A의 초기 상태로 돌려보내면 됨
function solution(name) {
  let answer = 0;
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
  name = name.split("");

  let startIdx = 0;
  let targetIdx = 0;
  let leng = name.filter((e) => e !== "A").length;

  // 원래는 while 문 name.includes("A") 라고했는데
  //  while문이 잘 안 돌아가서 변경함
  //  코드 실패
  while (leng > 0) {
    let notA = [];
    name.map((e, i) => {
      if (e !== "A") notA.push(i);
    });

    let distance = [];

    for (let i = 0; i < notA.length; i++) {
      let nameIdx = notA[i];

      let back = startIdx + (name.length - nameIdx);
      let front = nameIdx - startIdx;
      let move = Math.min(back, front);

      distance.push(move);
    }

    let notAIdx = distance.indexOf(Math.min(...distance));
    targetIdx = notA[notAIdx];
    answer += Math.min(...distance);

    //  A로 변환해주기
    let targetAlphabet = name[targetIdx];
    let alphabetIdx = alphabet.indexOf(targetAlphabet);

    if (alphabetIdx >= 0 && alphabetIdx <= 12) {
      answer += alphabetIdx;
      name[targetIdx] = "A";
    } else if (alphabetIdx >= 13 && alphabetIdx <= 25) {
      answer += 26 - alphabetIdx;
      name[targetIdx] = "A";
    }
    startIdx = targetIdx;
    leng--;
  }

  return answer;
}

//  https://muscardinus.tistory.com/60
//  이 코드가 내가 하고 싶은 방향을 한 것 같은데
//  이해가 안 감
//  var을 사용해서 지역변수를 밖에서도 사용함 ㅎ0ㅎ
//  알고리즘 세계란 어렵다
