//  정수 내림차순으로 배치하기
//  정확성: ⭕
//  시간: 5분

function solution(n) {
  let answer = 0;
  answer = Number(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .map(Number)
      .join("")
  );
  return answer;
}

//  프로그래머스 - 다른 사람의 풀이
//  숫자로 접근해서 내림차순으로 바꾸는 코드
//  아주 조금 빠름
//  초반에 문자열로 바꾸는 코드만 없을 뿐

function solution(n) {
  let nums = [];
  do {
    nums.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return nums.sort((a, b) => b - a).join("") * 1;
}
