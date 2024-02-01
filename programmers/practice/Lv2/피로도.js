//  피로도
//  정확성: ❌
//  시간: 30분

//  내 코드 X

//  [프로그래머스] 피로도 - JavaScript
//  github.io LeeJam

function solution(k, dungeons) {
  let answer = 0;
  let values = new Array(dungeons.length).fill(false);

  function DFS(hp, L) {
    for (let i = 0; i < dungeons.length; i++) {
      if (!values[i] && dungeons[i][0] <= hp) {
        values[i] = true;
        DFS(hp - dungeons[i][1], L + 1);
        values[i] = false;
      }
    }
    answer = Math.max(answer, L);
  }
  DFS(k, 0);

  return answer;
}
