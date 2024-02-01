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
