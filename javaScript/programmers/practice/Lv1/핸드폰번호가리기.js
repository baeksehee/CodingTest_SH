//  핸드폰 번호 가리기
//  정확성: ⭕
//  시간: 7분

//  내 코드
function solution(phone_number) {
  let answer = "";

  for (let i = 0; i < phone_number.length; i++) {
    if (i < phone_number.length - 4) {
      answer += "*";
    } else {
      answer += phone_number[i];
    }
  }

  return answer;
}

//  프로그래머스 - 다른 사람의 풀이
//  좋아요 제일 많이 받은 풀이는 정규식으로 이번에는 pass

//  그 다음 풀이는
//  repeat으로 뒤의 네 자리를 제외한 수만큼 * 반복
//  slice -4 로 해서 뒤의 네 자리는 숫자가 나오게 했음
