//  기지국 설치
//  정확성: ⭕
//  효율성: ❌

//  내 코드1
//  효율성 ❌
function solution(n, stations, w) {
  let answer = 0;

  let visited = new Array(n + 1).fill(false);
  visited[0] = true;

  stations.forEach((station) => {
    for (let i = station - w; i <= station + w; i++) {
      if (i > 0 && i <= n) {
        visited[i] = true;
      }
    }
  });

  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (visited[i] === false && count === 0) {
      visited[i] = true;
      count++;
    } else if (count >= 1) {
      visited[i] = true;
      count++;
    }

    if (count === 2 * w + 1) {
      answer++;
      count = 0;
    }

    if (count > 0 && i === n) answer++;
  }

  return answer;
}
