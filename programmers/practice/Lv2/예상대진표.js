//  예상 대진표
//  정확성: ❌
//  시간: 30분 이상

//  내 코드1
function solution(n, a, b) {
  let answer = 0;
  let arr = new Array(n).fill(0);
  let ing = true;
  arr[a - 1] = a;
  arr[b - 1] = b;

  while (ing) {
    for (let i = 0; i < arr.length; i = i + 2) {
      if (arr[i] != 0 && arr[i + 1] != 0) {
        answer++;
        ing = false;
      } else {
        arr = new Array(arr.length / 2).fill(0);
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        arr[a - 1] = a;
        arr[b - 1] = b;
        answer++;
      }
    }
  }

  return answer;
}

//  프로그래머스 - 다른 사람의 풀이
//  나도 Math.ceil() 사용했는데
//  풀이만 짧았어도.
//  문제 입력값 활용을 잘 생각해보자.
