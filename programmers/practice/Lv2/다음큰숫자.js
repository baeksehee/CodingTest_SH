//  다음 큰 숫자
//  정확성: ⭕
//  효율성: ⭕
//  Lv2 - 이진 변환 반복하기 복습하고 돌아옴
//  시간: 6분

function solution(n) {
  let answer = 0;
  let nOne = n.toString(2).match(/1/g).length;
  let ing = true;

  while (ing) {
    n++;
    let nextSameOne = n.toString(2).match(/1/g).length;
    if (nextSameOne === nOne) {
      answer = n;
      ing = false;
    }
  }
  return answer;
}

//  프로그래머스 - 다른 사람의 풀이
//  첫 번째
//  match(), 삼항 연산자를 사용
//  매개변수 수보다 크면서 이진수 1의 수가 같으면 true
//  다른 다시 다른 수 증가시킴
//  이렇게 return 한 줄로 끝냄

//
