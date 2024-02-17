//  가장 큰 수
//  정확성: ❌
//  시간: 25분

// 내 코드 1
//  2시 48분~ 3시 13분 25분
function solution(numbers) {
  return numbers
    .sort((a, b) => {
      let fa = Number(a.toString()[0]);
      let fb = Number(b.toString()[0]);

      if (fa - fb < 0) return 1;
      if (fa - fb > 0) return -1;
      if (fa - fb === 0) {
        let restA = 0;
        let restB = 0;

        if (a.toString().length > 1) {
          restA = Number(a.toString()[1]);
        } else {
          restA = fa;
        }

        if (b.toString().length > 1) {
          restB = Number(b.toString()[1]);
        } else {
          restB = fb;
        }
        if (restA - restB < 0) return 1;
        if (restA - restB >= 0) return -1;
      }
    })
    .join("");
}

//  gpt에게 물어본 정답 코드
function solution(numbers) {
  // 숫자를 문자열로 변환하여 정렬하는 비교 함수 정의
  const compare = (a, b) => {
    const strA = a.toString();
    const strB = b.toString();
    return strB + strA - (strA + strB);
  };

  const sortedNumbers = numbers.sort(compare);
  if (sortedNumbers.every((num) => num === 0)) {
    return "0";
  }
  return sortedNumbers.join("");
}

//  고친 코드
//  sort에 대해서 알기위해서!

function solution(numbers) {
  let answer = numbers
    .sort((a, b) => {
      let fa = a.toString();
      let fb = b.toString();

      return fb + fa - (fa + fb);
      //  fb + fa 가 먼저 나온 이유! 뒤에 값 + 앞의 값 이 클시 바꿔야 하기 때문
      //  그러니깐 이 기준으로 양수 음수를 측정해야 하기 때문
      //  fa + fb 가 먼저 나오려면 앞에 -를 붙여주면 됨
    })
    .join("");

  if (answer.split("").filter((num) => num === "0").length === answer.length)
    return "0";

  return answer;
}

//  ❌
//  모든 문자열이 "0"인 예외상황을 체크하지 않아서 틀림
function solution(numbers) {
  let answer = "";
  numbers.sort((a, b) => {
    let aStr = a.toString();
    let bStr = b.toString();

    if (aStr + bStr - (bStr + aStr) > 0) return -1;
    else if (aStr + bStr - (bStr + aStr) < 0) return 1;
    else 0;
  });

  answer = numbers.join("");
  // if (answer.split("").filter((e) => e == "0").length === answer.length)
  //   return "0";
  return answer;
}
