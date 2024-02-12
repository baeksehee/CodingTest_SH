//  행렬의 곱셈
//  정확성: ❌
//  시간: 30분 이상

//  내 코드
//  행렬의 곱셈을 몰랐음
function solution(arr1, arr2) {
  let arr1r = arr1[0].length;
  let arr1l = arr1.length; // 세로 줄 갯수

  let answer = new Array(arr1r).fill(new Array(arr1l).fill(0));

  let arr2r = arr2[0].length;
  let arr2l = arr2.length;

  for (let i = 0; i < arr1l; i++) {
    // 세로줄 갯수
    for (let j = 0; j < arr1r; j++) {
      // 가로줄 갯수
      let value = 0;
      for (let k = 0; k < arr2l; k++) {
        // 세로 줄 갯수
        value += arr1[i][j] * arr2[k][j];
      }
      answer[i][j] = value;
    }
  }

  return answer;
}

// [[ arr1[0][0] 1 ,  4 arr1[0][1] ],      [[3 arr2[0][0], 3arr[0][1]],
//  [ arr1[1][0]3,    2 arr1[1][1] ],       [3 arr2[1][0], 3 arr[1][1]]]
//  [ arr1[2]][0]4,    1 arr1[2][1]]]

// [[2, 3, 2]    [[5, 4, 3]
//  [4, 2, 4]     [2, 4, 1]
//  [3, 1, 4]]    [3, 1, 1]]

//  velog-[프로그래머스] 행렬의 곱셈 - JavaScript
//  codeH
//  보고 고친 코드

function solution(arr1, arr2) {
  let arr1r = arr2[0].length;
  let arr1l = arr1.length; // 세로 줄 갯수
  let arr2r = arr2.length;

  let answer = [];

  for (let i = 0; i < arr1l; i++) {
    // 세로줄 갯수
    let result = [];
    for (let j = 0; j < arr1r; j++) {
      // 가로줄 갯수
      let value = 0;
      for (let k = 0; k < arr2r; k++) {
        // 세로 줄 갯수
        value += arr1[i][k] * arr2[k][j];
      }
      result.push(value);
    }
    answer.push(result);
  }

  return answer;
}

//  복습 코드
//  ⭕
function solution(arr1, arr2) {
  let answer = [];
  let col = arr2[0].length;
  let row = arr1.length;
  let rowR = arr1[0].length;

  for (let i = 0; i < row; i++) {
    answer.push([]);
    for (let j = 0; j < col; j++) {
      let a = 0;
      for (let k = 0; k < rowR; k++) {
        a += arr1[i][k] * arr2[k][j];
      }
      answer[i].push(a);
    }
  }
  return answer;
}
