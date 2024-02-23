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
function solution(name) {
  let answer = 0;
  let temp = [];
  //  여기까지는 이해하겠음
  for (let i = 0; i < name.length; i++) {
    temp.push("A");
    // 영문 대문자 => 65~90
    let diff = name[i].charCodeAt() - temp[i].charCodeAt();
    answer += diff > 13 ? 26 - diff : diff;
  }

  let minMove = name.length - 1;
  for (let i = 1; i < name.length; i++) {
    if (name[i] === "A") {
      for (var j = i + 1; j < name.length; j++) {
        if (name[j] != "A") break;
      }
      const left = i - 1;
      const right = name.length - j;
      minMove = Math.min(
        minMove,
        left > right ? left + right * 2 : left * 2 + right
      );
      i = j;
    }
  }
  return answer + minMove;
}

//  참고
//  알고리즘_JS/프로그래머스_Level2
//  [프로그래머스 JavaScript] 조이스틱
//  출처: https://ghost4551.tistory.com/113 [프론트엔드 개발자의 기록 공간:티스토리]
//  왜 틀렸지.. 분석해보겠습니다.
function solution(name) {
  let answer = 0;
  let ud = 0;
  //  가로 이동 방향 최댓값
  let lr = name.length - 1;
  name = name.split("");

  name.forEach((e, i) => {
    e = e.charCodeAt();

    ud += Math.min(e - "A".charCodeAt(), "Z".charCodeAt() - e);

    let index = i;

    while (name.length - 1 >= index && name[index] === "A") index++;

    lr = Math.min(lr, i * 2 + name.length - index);
  });

  answer = ud + lr;
  return answer;
}

// 더 참고해서 고친 코드
function solution(name) {
  let answer = 0;
  let ud = 0;
  //  가로 이동 방향 최댓값
  let lr = name.length - 1;

  // name = name.split("");

  [...name].forEach((e, i) => {
    e = e.charCodeAt();

    ud += Math.min(e - "A".charCodeAt(), "Z".charCodeAt() - e + 1);

    let index = i + 1;

    while (name.length > index && name[index] === "A") index++;

    lr = Math.min(
      lr,
      i * 2 + name.length - index,
      i + 2 * (name.length - index)
    );
  });

  answer = ud + lr;
  return answer;
}
