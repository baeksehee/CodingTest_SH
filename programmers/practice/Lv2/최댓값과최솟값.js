//  최댓값과 최솟값
//  정확성: ⭕
//  시간:  2분

//  내 코드
function solution(s) {
  let answer = "";
  let min = 0;
  let max = 0;

  const arr = s.split(" ");

  min = Math.min(...arr);
  max = Math.max(...arr);

  answer += `${min} ${max}`;

  return answer;
}
