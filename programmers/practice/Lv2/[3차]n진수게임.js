//  [3차]n진수 게임
//  정확성: ⭕
//  시간: 30분

//  내 코드
function solution(n, t, m, p) {
  let answer = "";
  let result = "";
  let num = 0;

  while (answer.length < t * m) {
    let plusNum = num.toString(n);

    //주석처리 코드 필요 없는 코드를 적었네
    // if (plusNum === 10) answer += "A";
    // else if (plusNum === 11) answer += "B";
    // else if (plusNum === 12) answer += "C";
    // else if (plusNum === 13) answer += "D";
    // else if (plusNum === 14) answer += "E";
    // else if (plusNum === 15) answer += "F";
    // else answer += plusNum;
    answer += plusNum;
    num++;
  }

  answer = answer.slice(0, t * m);

  for (let i = p - 1; i < answer.length; i = i + m) {
    result += answer[i];
  }

  result = result.toUpperCase();

  return result;
}
