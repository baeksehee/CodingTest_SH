//  H-Index
//  정확성 : 1번째 ❌ (15분)
//  시간: 1시간

//  내 코드 1

//  h가 최댓값이라는 건 0 번 이상 인용된 거 5편
//  1번 이상 인용된 건 1번 이상 인욘된 건 4편
//  2번 이상 인용된 건 3편
//  3번 이상 인용된 건 3편
//  4번 이상 인용된 건 2편
//  인용횟수 = 인용횟수를 넘은 논문 편 (이 값이 최대)
function solution(citations) {
  let answer = 0;
  let arr = citations.sort((a, b) => a - b);
  let a = 0; // 인용된 논문 편수
  let b = 0; // 인용된 논문 편

  for (let i = 0; i < citations.length; i++) {
    b = 0;
    a = citations[i];

    arr.map((e) => {
      if (e >= a) b++;
    });

    if (a === b) {
      answer = b;
      break;
    }
  }
  return answer;
}

//  개발참치의 알고리즘이야기
//  프로그래머스 - 정렬 > H-Index (Javascript)

//  문제 이해가 나는 안 된다.
//  문제에 n편이 나는 당연히 citations 배열의 길이인 줄!

// function solution(citations) {
//   citations.sort((a, b) => b - a);
//   for (let i = 0; i < citations.length; i++) {
//     if (i >= citations[i]) {
//       return i;
//     }
//   }
//   return citations.length;
// }
