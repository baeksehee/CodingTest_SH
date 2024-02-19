//  [1차] 프렌즈4블록
//  정확성
//  시간:

//  내 코드 1 잘못된 접근
function solution(m, n, board) {
  let answer = 0;
  let game = true;
  board.map((e, i) => (board[i] = e.split("")));

  while (game) {
    for (let i = m - 1; i >= 0; i--) {
      // 행
      for (let j = 0; j < n - 1; j++) {
        if (board[i][j] === 0) {
          for (let k = i + 1; k < m - 1; k++) {
            if (board[k][j] != 0) {
              let save = board[k][j];
              board[i][j] = save;
              board[k][j] = 0;
            }
          }
        }
      }
    }

    let deleteI = new Set();

    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        let str = board[i][j];
        if (
          str === board[i][j + 1] &&
          str === board[i + 1][j] &&
          str === board[i + 1][j + 1]
        ) {
          deleteI.add([i, j].join(" "));
          deleteI.add([i, j + 1].join(" "));
          deleteI.add([i + 1, j].join(" "));
          deleteI.add([i + 1, j + 1].join(" "));
        }
      }
    }

    if (deleteI.size === 0) game = false;

    deleteI = Array.from(deleteI);

    for (let i of deleteI) {
      let [y, x] = i.split(" ").map(Number);
      board[x][y] = 0;
      answer++;
    }
    console.log(board);
  }

  return answer;
}

//  두 번째 코드
//  세로 방향으로 접근은 좋았는데
//  while 문 나가는 법을 모르겠음
function solution(m, n, board) {
  let answer = 0;
  let array = new Array(n).fill("");
  let game = true;

  for (let i = 0; i < m; i++) {
    // 행
    for (let j = 0; j < n; j++) {
      // 열
      array[j] += board[i][j];
    }
  }

  array.map((e, i) => (array[i] = e.split("").reverse()));

  while (true) {
    let deleteI = new Set();

    for (let i = 0; i < n - 1; i++) {
      //
      for (let j = 0; j < m - 1; j++) {
        let word = array[i][j];
        if (
          word === array[i + 1][j] &&
          word === array[i][j + 1] &&
          word === array[i + 1][j + 1]
        ) {
          deleteI.add([i, j].join(" "));
          deleteI.add([i + 1, j].join(" "));
          deleteI.add([i, j + 1].join(" "));
          deleteI.add([i + 1, j + 1].join(" "));
        }
      }
    }

    if (deleteI.size < 4) return answer;

    for (let i of deleteI) {
      let [x, y] = i.split(" ").map(Number);
      array[x][y] = 0;
      answer++;
    }

    array.map((e, i) => (array[i] = e.filter((find) => find != 0)));
    // console.log(array);
  }

  // return answer;
}

// gpt에거 수정 부탁
function solution(m, n, board) {
  let answer = 0;
  let array = [];
  let game = true;

  for (let i = 0; i < n; i++) {
    // 열
    array.push([]);
    for (let j = 0; j < m; j++) {
      // 행
      array[i].unshift(board[j][i]);
    }
  }

  while (game) {
    let deleteI = new Set();

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < m - 1; j++) {
        let word = array[i][j];
        if (
          word &&
          word === array[i + 1][j] &&
          word === array[i][j + 1] &&
          word === array[i + 1][j + 1]
        ) {
          deleteI.add([i, j].join(" "));
          deleteI.add([i + 1, j].join(" "));
          deleteI.add([i, j + 1].join(" "));
          deleteI.add([i + 1, j + 1].join(" "));
        }
      }
    }

    if (deleteI.size < 4) return answer;

    for (let i of deleteI) {
      let [x, y] = i.split(" ").map(Number);
      array[x][y] = 0;
      answer++;
    }

    for (let i = 0; i < n; i++) {
      array[i] = array[i].filter((find) => find != 0);
    }

    deleteI.clear();
  }

  return answer;
}

//  복습 코드
//  ⭕ but 시간초과
//  코드가 정밀하게 짜져야 함 ..
//  m, n 매개변수가 있따는 걸 까먹었네! 그래서 잘 풀린 듯
function solution(m, n, board) {
  let answer = 0;
  let nB = [];
  let flag = true;

  for (let i = 0; i < board.length; i++) {
    board[i] = board[i].split("").reverse();
  }

  for (let i = 0; i < board[0].length; i++) {
    nB.push([]);
    for (let j = 0; j < board.length; j++) {
      nB[i].push(board[j][i]);
    }
  }

  for (let i = 0; i < nB.length; i++) {
    nB[i] = nB[i].reverse();
  }

  while (flag) {
    let bye = [];

    for (let i = 0; i < nB.length - 1; i++) {
      for (let j = 0; j < nB[i].length - 1; j++) {
        if (
          nB[i][j] === nB[i + 1][j] &&
          nB[i][j] === nB[i][j + 1] &&
          nB[i][j] === nB[i + 1][j + 1]
        ) {
          bye.push(`${i},${j}`);
          bye.push(`${i + 1},${j}`);
          bye.push(`${i},${j + 1}`);
          bye.push(`${i + 1},${j + 1}`);
        }
      }
    }

    let list = new Set(bye);
    list = Array.from(list);
    if (list.length < 4) flag = false;

    answer += list.length;

    while (list.length > 0) {
      let [x, y] = list.shift().split(",").map(Number);
      nB[x][y] = 0;
    }

    for (let i = 0; i < nB.length; i++) {
      nB[i] = nB[i].filter((e) => e != 0);
    }
  }
  return answer;
}
