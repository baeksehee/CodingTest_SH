//  전력망을 둘로 나누기
//  정확성: ⭕
//  시간: 70분

//  내 코드1
//  전력망을 둘로 나누기
//  9시 46분
//  10시 2분
//  70분

function solution(n, wires) {
  let answer = [];

  for (let i = 0; i < n - 1; i++) {
    let copy = [...wires];
    let lines = new Array(n + 1).fill().map((e) => []);
    let visited = new Array(n + 1).fill().map((e) => false);

    copy.splice(i, 1);

    copy.forEach((node) => {
      lines[node[0]].push(node[1]);
      lines[node[1]].push(node[0]);
    });

    let queue = [copy[0][0]];
    visited[copy[0][0]] = true;

    while (queue.length > 0) {
      let node = queue.shift();

      if (lines[node].length === 0) break;

      lines[node].forEach((node) => {
        if (!visited[node]) {
          visited[node] = true;
          queue.push(node);
        }
      });
    }

    let A = visited.filter((e) => e === true).length;
    let B = visited.filter((e) => e === false).length - 1;
    answer.push(Math.abs(A - B));
  }
  // console.log(answer);
  // // answer = answer.filter((e) => e != 0);
  return Math.min(...answer);
}
