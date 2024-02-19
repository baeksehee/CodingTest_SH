//  k진수에서 소수 개수 하기
//  정확성: ❌ -> ⭕`
//  시간: 30분

//  내 코드 1
//  테스트 케이스 1이 통과 안 됨
function solution(n, k) {
  let answer = 0;
  let nums = n
    .toString(k)
    .split(0)
    .filter((e) => e.length >= 1 && e != 1);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 2; j < nums[i]; j++) {
      if (nums[i] % j === 0) nums.splice(i, 1);
    }
  }

  answer = nums.length;

  return answer;
}

//  내 코드2
//  프로그래머스 힌트 하나 보고 수정 후 정답
function solution(n, k) {
  let answer = 0;
  let nums = n
    .toString(k)
    .split(0)
    .filter((e) => e.length >= 1 && e != 1);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 2; j <= Math.sqrt(nums[i]); j++) {
      if (nums[i] % j === 0) nums.splice(i, 1);
    }
  }

  answer = nums.length;

  return answer;
}

//  복습코드
//  정확성: ❌
//  이 코드는 정답 코드
//  정답이지 않았을 때 for문에 조건문이랑 정답을 변수값 중 하나 ++  이런 거 제대로 안 함
function solution(n, k) {
  let answer = 0;
  let minus = 0;
  let nums = n
    .toString(k)
    .split("0")
    .filter((e) => e.length >= 1 && e !== "1");
  for (let i = 0; i < nums.length; i++) {
    for (let j = 2; j <= Math.sqrt(nums[i]); j++) {
      //  for문에 break, if문 등 올바르게 사용하지 않으면 실패임
      if (nums[i] % j === 0) {
        minus++;
        break;
      }
    }
  }
  return nums.length - minus;
}

//  복복습
//  ❌ 시간초과

function solution(n, k) {
  let answer = 0;

  n = n.toString(k);
  n = n.split(0);

  for (let i = 0; i < n.length; i++) {
    let num = Number(n[i]);
    if (num === 1) continue;
    if (num === 2) {
      answer++;
    }
    for (let j = 2; j < num; j++) {
      if (num % j === 0) break;
      else if (j === num - 1) answer++;
    }
  }
  return answer;
}

//  복복습 코드 고친 거

function solution(n, k) {
  n = n.toString(k);
  n = n.split(0).filter((e) => e.length >= 1 && e != "" && e != "1");
  let minus = 0;

  for (let i = 0; i < n.length; i++) {
    let num = Number(n[i]);
    if (num === 1) continue;
    for (let j = 2; j <= Math.sqrt(num); j++) {
      // for문 조건문의 기준 수가 정수가 아닐 때는 이걸 이용할 생각을 하지 말자!!! 다른 대안으로 고고
      if (num % j === 0) {
        minus++;
        break;
      }
    }
  }
  return n.length - minus;
}
