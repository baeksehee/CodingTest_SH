//  가장 먼 노드
//  정확성: ❌
//  시간: 27분

//  내 코드1
function solution(n, edge) {
  let answer = 0;
  let d = new Array(n + 1).fill(0);
  let visited = new Array(n + 1).fill(false);
  let lines = [];

  for (let i = 0; i < n + 1; i++) {
    lines.push([]);
  }

  edge.sort((a, b) => a[0] - b[0]);

  d[1] = 0;
  visited[1] = true;

  for (let e of edge) {
    let [t, f] = e;
    lines[t].push({ t: t, f: f });
    lines[f].push({ t: f, f: t });
  }

  for (let l of lines) {
    if (l.length === 0) continue;

    while (l.length > 0) {
      let line = l.shift();
      let t = line.t;
      let f = line.f;
      if (visited[t] === true && visited[f] === false) {
        visited[f] = true;
        d[f] = d[t] + 1;
      }
    }
  }

  let max = Math.max(...d);

  for (let i = 0; i < d.length; i++) {
    if (d[i] === max) answer++;
  }

  return answer;
}
