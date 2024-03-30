//  단어 변화
//  정확성 : ❌
//  시간: 40 분

//  내 코드
function solution(begin, target, words) {
  let answer = 0;
  let last = "";

  function dfs(start, target, words) {
    last = start;
    if (start === target) return;
    if (words.length === 0) return;

    let word = words.shift();
    let count = 0;

    for (let i = 0; i < start.length; i++) {
      if (word[i] !== start[i]) count += 1;
      if (count > 1) dfs(start, target, words);
    }

    if (count === 1) {
      answer++;
      dfs(word, target, words);
    }
  }

  dfs(begin, target, words);
  return last === target ? answer : 0;
}

//  Algorithm/문제풀이
//  [프로그래머스] 단어 변환(LV.3) by javascript - 깊이/너비 우선 탐색(DFS/BFS)
//  by 썸머워즈
//   2022. 4. 8.
//  출처: https://mine-it-record.tistory.com/531 [나만의 기록들:티스토리]

function solution(begin, target, words) {
  let answer = 0;
  let visited = [];
  let queue = [[begin, 0]];

  function check(str1, str2) {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) count++;
    }
    return count === 1;
  }

  while (queue.length) {
    let [word, l] = queue.shift();

    if (word === target) return l;

    words.forEach((w) => {
      if (!visited.includes(w) && check(word, w)) {
        queue.push([w, ++l]);
        visited.push(w);
      }
    });
  }

  return 0;
}
