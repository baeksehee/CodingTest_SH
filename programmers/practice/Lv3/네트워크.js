//  네트워크
//  정확성: ❌
//  시간: 42분

//  내 코드 1
//  10시 15분
//  dfs 문제 아님? 최단 거리를 구하는 건 아닌 것 같은데
//  computers[i][i]는 1로 표현! 즉 자긴 자기 자신은 항상 1
//  하나라도 연결 되어있으면 네트워크는 연결 되어있다고 생각함

function solution(n, computers) {
  let answer = 0;

  let visited = new Array(n).fill(false);

  function dfs(computer, idx) {
    let c = [...computer];
    if (visited.filter((e) => e === false).length === 0) return;
    if (idx === n - 1 && visited[idx] === false) {
      answer++;
      return;
    }
    if (c.filter((e) => e === 1).length === 1) {
      answer++;
      return;
    }

    c.map((e, i) => {
      if (e === 1 && i != idx) {
        visited[i] = true;
        dfs(computers[i], i);
      }
    });
  }

  for (let i = 0; i < computers.length; i++) {
    let computer = computers[i];
    let check = computer.filter((e) => e === 1).length;
    if (check === 1) {
      answer++;
      visited[i] = true;
    } else {
      dfs(computer, i);
    }
  }

  return answer;
}

//  [프로그래머스] LV.3 네트워크 (JS)
//  KG·2021년 4월 2일
//  velog

function solution(n, computers) {
  let answer = 0;
  let visited = new Array(n).fill(false);

  function dfs(node, visited, computers) {
    visited[node] = true;

    for (let i = 0; i < computers.length; i++) {
      if (computers[node][i] === 1 && !visited[i]) {
        dfs(i, visited, computers);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i, visited, computers);
      answer++;
    }
  }

  return answer;
}
