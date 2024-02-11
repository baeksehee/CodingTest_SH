//  타겟 넘버
//  정확성:
//  시간:

//  내 코드 1
//  내가 짜고 싶은 코드
//  number 모든 숫자에 + - 두 가지 버전 최종 결과들을 배열에 모으고 싶음
//  DFS 잘 모르는데 접근 좋은 듯
function solution(numbers, target) {
  let answer = 0;
  let results = [];

  function p(n) {
    return Math.abs(n);
  }
  function m(n) {
    return -Math.abs(n);
  }

  function pm(num) {
    let i = 0;
    let result = 0;

    while (i < 5) {
      result += p(num[i]);

      if ((i = num.length - 1)) results.push(result);
      result -= p(num[i]);
      pm(num[i + 1]);

      result += m(num[i]);
      if ((i = num.length - 1)) results.push(result);
      result -= m(num[i]);
      pm(num[i + 1]);
    }
  }

  pm(numbers);

  return answer;
}

//  [프로그래머스] 자바스크립트 '타겟 넘버' 문제 풀이 (LV.2)
//  출처: //yong-nyong.tistory.com/41 [💻용뇽 개발 노트💻:티스토리]
https: function solution(numbers, target) {
  // DFS를 구현할 때 재귀를 멈출 수 있는 매개 변수를 넣는 것이 중요.
  let answer = 0;

  function DFS(count, sum) {
    if (count === numbers.length) {
      if (sum === target) answer++;
      return;
    }

    DFS(count + 1, sum - numbers[count]);
    DFS(count + 1, sum + numbers[count]);
  }

  DFS(0, 0); //호출 중요!

  return answer;
}

//  복습 코드
//  사실 전날에 봄!
//  제한사항 보면 범위가 크지 않음 dfs 사용 가능
//  아니면 dp 고려해보라고 들었음
function solution(numbers, target) {
  let answer = 0;
  let leng = numbers.length;

  function dfs(value, count) {
    if (count > leng) {
      if (target === value) {
        answer++;
      }
      return;
    }
    // dfs(value + numbers[count - 1], count++) 라고 해서 틀렸음
    dfs(value + numbers[count - 1], count + 1);
    dfs(value - numbers[count - 1], count + 1);
  }

  dfs(0, 1);

  return answer;
}
