//  튜플
//  정확성: ⭕
//  시간: 37분

//  내 코드1
//  테스트 시간이 길지만

//  s의 {} 안에 숫자들이 가득하다
//  그 안에 있는 숫자들 중 갯수가 많은 순으로 !

function solution(s) {
  let answer = [];
  let ss = s.split("{").join("").split("}").join("").split(",").map(Number);
  ss.sort((a, b) => a - b);

  if (ss.length == 1) {
    answer.push(ss[0]);
    return answer;
  }

  let set = new Set(ss);
  let nums = Array.from(set);
  let numsCount = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    ss.map((e) => {
      if (e === nums[i]) numsCount[i]++;
    });
  }

  for (let i = 0; i < nums.length; i++) {
    let max = nums[numsCount.indexOf(Math.max(...numsCount))];
    answer.push(max);
    numsCount[numsCount.indexOf(Math.max(...numsCount))] = 0;
  }

  return answer;
}
