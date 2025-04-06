//  숫자 문자열과 영단어

//  내 코드1
//  정확성: ❌ -> answer + answer + "9" 수정하니깐 맞음⭕
//  시간: 약 30분
//  if else문을 사용해서 for 문을 돌림
//  왜 틀린거지?
function solution(s) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (/[0-9]/.test(s[i])) {
      // test 함수가 옳지 못해서 // 치는 부분만 강의자료에서 참고했습니다.
      answer = answer + s[i];
    } else {
      if (s[i] === "z") {
        answer = answer + "0";
        i = i + 3;
        continue;
      } else if (s[i] === "o") {
        answer = answer + "1";
        i = i + 2;
        continue;
      } else if (s[i] == "t" && s[i + 1] == "w") {
        answer = answer + "2";
        i = i + 2;
        continue;
      } else if (s[i] == "t" && s[i + 1] == "h") {
        answer = answer + "3";
        i = i + 4;
        continue;
      } else if (s[i] == "f" && s[i + 1] == "o") {
        answer = answer + "4";
        i = i + 3;
        continue;
      } else if (s[i] == "f" && s[i + 1] == "i") {
        answer = answer + "5";
        i = i + 3;
        continue;
      } else if (s[i] == "s" && s[i + 1] == "i") {
        answer = answer + "6";
        i = i + 2;
        continue;
      } else if (s[i] == "s" && s[i + 1] == "e") {
        answer = answer + "7";
        i = i + 4;
        continue;
      } else if (s[i] == "e") {
        answer = answer + "8";
        i = i + 4;
        continue;
      } else if (s[i] == "n") {
        answer + answer + "9"; // 이 부분만 고쳤으면 맞았음
        i = i + 3;
        continue;
      }
    }
  }

  return Number(answer);
}

//  내 코드2
//  정확성: ❌
//  시간: 24분
//  replace를 사용해서 했음 방법은 좋았으나, 정규표현식을 사용했어야 맞음 g
function solution(s) {
  s = s.replace("zero", "0");
  s = s.replace("one", "1");
  s = s.replace("two", "2");
  s = s.replace("three", "3");
  s = s.replace("four", "4");
  s = s.replace("five", "5");
  s = s.replace("six", "6");
  s = s.replace("seven", "7");
  s = s.replace("eight", "8");
  s = s.replace("nine", "9");

  return Number(s);
}

//  내 코드3
//  정확성: ⭕
//  시간: 7분
// replaceAll을 사용하여 통과함

function solution(s) {
  s = s.replaceAll("zero", "0");
  s = s.replaceAll("one", "1");
  s = s.replaceAll("two", "2");
  s = s.replaceAll("three", "3");
  s = s.replaceAll("four", "4");
  s = s.replaceAll("five", "5");
  s = s.replaceAll("six", "6");
  s = s.replaceAll("seven", "7");
  s = s.replaceAll("eight", "8");
  s = s.replaceAll("nine", "9");

  return Number(s);
}
