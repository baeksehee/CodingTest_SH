//  삼각 달팽이
//  정확성: ❌
//  시간: 90분

//  내 코드1
//  9시 37분

function solution(n) {
  let answer = [];
  let num = 0;
  let box = 0;
  let triangle = Math.ceil(n / 3);

  for (let i = 0; i < n; i++) {
    answer.push(new Array(i + 1).fill(0));
    box += i + 1;
  }

  answer[0][0] = 1;
  let top = 0;
  let bottom = n - 1;
  //  left 에서 오른쪽 만큼 이동의 값
  let left = 0;
  //  right 에서 왼쪽 만큼 이동의 값
  let right = 0;

  while (triangle > 0) {
    console.log(top, bottom);
    //  왼쪽 라인
    for (let i = top; i < bottom; i++) {
      answer[i][0 + left] = ++num;
    }

    //  가장 밑 라인
    for (let i = left; i < n - right; i++) {
      if (triangle === 1 && i > n - right - 2) break;
      answer[bottom][i] = ++num;
    }

    //  오른쪽 라인
    for (let i = bottom - 1; i > top; i--) {
      answer[i][answer[i].length - right - 1] = ++num;
    }

    triangle--;
    top += 2;
    left++;
    right++;
    bottom--;
  }

  return answer.flat();
}

//  참고
//  [프로그래머스] 삼각 달팽이 - JavaScript
//  이수동·2022년 2월 28일
//  아직 오류 있음

function solution(n) {
  let answer = [];
  // let startN = n;
  for (let i = 0; i < n; i++) {
    answer.push(new Array(i + 1).fill(0));
  }

  let row = -1;
  let cul = 0;
  let num = 1;

  // console.log(answer);

  while (n > 0) {
    //  위에서 아래로 대각선
    for (let i = 0; i < n; i++) {
      answer[++row][cul] = num;
      num++;
    }

    //  밑에 왼쪽에서 오른쪽
    for (let i = 0; i < n - 1; i++) {
      answer[row][++cul] = num;
      num++;
    }

    //  오른쪽 라인으로 올라오기
    for (let i = 0; i < n - 2; i++) {
      answer[--row][--cul] = num;
      num++;
    }

    num -= 3;
  }

  return answer.flat();
}
