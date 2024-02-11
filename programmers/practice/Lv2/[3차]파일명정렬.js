//  [3차] 파일명 정렬
//  정확성: ❌
//  시간: 90분

//  내 코드1

//  파일 저장소 서버 관리
//  이름 순이면 10 , 9 순서로 잘못 표시
//  HEAD 문자로만(한 글자 이상) , toUpperCase()
//  NUMBER 0~99999(0000이나 0101 등도 가능) 0은 무시 된 앞에 001 = 1
//  TAIL 숫자가 다시 나타날 수도 있으며, 아무 글자도 없을 수 있다 // 숫자가 끝나면 남은 것이 TAIL, TAIL로 인해서 순서가 변경되지 않음

//  먼저 앞의 문자열에 따라 정렬
//  문자열이 같을 시 두번째 앞의 0들을 제외한 숫자에 따라 정렬
function solution(files) {
  let answer = [];

  // 문자열에 따라 정렬
  for (let file of files) {
    let HEAD = "";
    let HEADN = 0;
    let NUMBER = "";
    let TAIL = "";
    let fileArray = [];

    for (let i = 0; i < file.length; i++) {
      HEAD += file[i];
      HEADN++;
      if (Number(file[i + 1]) >= 0) break;
      // files.splice(0,1);
    }

    let NUMBERN = HEADN;

    for (let i = HEADN; i < file.length; i++) {
      if (!(Number(file[i]) >= 0) || file[i] === " ") break;
      else {
        NUMBER += file[i];
        NUMBERN++;
      }
    }

    TAIL = file.slice(NUMBERN);
    fileArray.push(HEAD, NUMBER, TAIL);
    answer.push(fileArray);

    // console.log(HEADN);
    // console.log(HEAD);
    // console.log(NUMBER);
    // console.log(NUMBERN);
    // console.log(file);
  }
  // console.log(typeof "") ; "string"
  // console.log(typeof 2); "number"
  // console.log(typeof "hi"); "string"

  // let array = [['a','2'], ['c', '1'], ['b','1']]
  // console.log(array.sort((a,b) => a[0] - b[0]))

  //  answer.sort((a, b) => a[0] - b[0]);
  //  문자열 정렬 방법을 몰라서 검색해봄
  // let array = ['1', '2', '01'];
  // console.log(array.sort((a, b) => Number(a) - Number(b)));
  console.log(answer);
  answer.sort((a, b) => Number(a[1]) - Number(b[1]));
  answer.sort((a, b) => a[0].toUpperCase().localeCompare(b[0].toUpperCase()));

  answer.map((e, i) => {
    answer[i] = e.join("");
  });

  // console.log(answer);
  return answer;
}

//  좋은 풀이 가지고 옴
//  [Algorithm] '파일명 정렬' 프로그래머스 Level2 문제 - JavaScript
//  출처: https://dori-coding.tistory.com/entry/Algorithm-파일명-정렬-프로그래머스-Level2-문제-JavaScript [도리쓰에러쓰:티스토리]
//  sort와 정규표현식 활용 정말 good
//  이해 못 하겠음
function solution(files) {
  return files.sort((a, b) => {
    const AHead = a.match(/^\D+/)[0].toLowerCase();
    const BHead = b.match(/^\D+/)[0].toLowerCase();

    if (AHead > BHead) return 1;
    if (AHead < BHead) return -1;

    const ANum = a.match(/\d+/)[0].replace(/^0+/, "");
    const BNum = b.match(/\d+/)[0].replace(/^0+/, "");

    return ANum - BNum;
  });
}
