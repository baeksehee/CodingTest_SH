//  음양 더하기
//  정확성: ⭕`
//  시간: 4분

//  내 코드
//  같은 인덱스가 true 면 양
//  같은 인덱스가 false 면 음
function solution(absolutes, signs) {
  let answer = 0;
  absolutes.map((e, i) => {
    if (signs[i] === true) {
      answer += e;
    } else answer += -e;
  });

  return answer;
}

//  프로그래머스 - 다른 사람의 풀이
//  reduce()와 삼항 연산자를 사용했음
//  그걸 참고해서 나도 삼항 연산자를 사용해봤는데 속도가 거의 같았음
//  원소 값이 true false라 삼항 연산자를 사용하기에 편하다

//  reduce()로 풀이를 하니깐 속도가 엄청 빨라짐
function solution(absolutes, signs) {
  let answer = 0;
  absolutes.map((e, i) => {
    signs[i] ? (answer += e) : (answer += -e);
  });

  return answer;
}
