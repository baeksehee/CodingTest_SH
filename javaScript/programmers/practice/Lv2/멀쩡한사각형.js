// 멀쩡한 사각형
// 내 코드
// 정확성: 100

// 일단 저는
// 코딩테스트 지도 강의를 들으며
// 이 문제가 최대공약수 or 최대 공배수의 문제라는 것을 알았습니다.
// 하지만 규칙을 찾기에는 저의 사고가 부족해
// ai에게 물어봤습니다.
// 그래서 나온 코드입니다.
// 그리고 부끄럽지만 아직 최대공약수 a, b 두 수가 있다면 어떤 변수가 최종적으로 최대공약수인지 헷갈리네요.

function solution(w, h) {
  var answer = 1;

  let size = w * h;
  let plus = w + h;

  while (h !== 0) {
    let temp = w % h;
    w = h;
    h = temp;
  }

  answer = size - (plus - w);

  return answer;
}
