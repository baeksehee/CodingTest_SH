## 다이나믹 프로그래밍

[(이코테 2021 강의 몰아보기) 6. 다이나믹 프로그래밍-동빈나]("https://www.youtube.com/watch?v=5Lu34WIx2Us&list=PLRx0vPvlEmdAghTr5mXQxGpHjWqSz0dgC&index=6")

### 다이나믹 프로그래밍

- 메모리를 적절히 사용하여 수행 시간 효율성을 비약적으로 향상시키는 방법
- 이미 계산된 결과(작은 문제)느 별도의 메모리 영역에 저장하여 다시 계산하지 않도록 함
- `탑다운` `보텀업` 방식이 있음

### 동적 계획법

> 사실 동적(프로그래밍에서 프로그램 도중에 실행에 필요한 메모리를 할당하는 기법)의 의미가 아니라 아무 의미 없다고 함

### 다이나믹 프로그래밍 조건

- 최적 부분 구조: 큰 문제를 작은 문제로 나눌 수 있으면 작은 문제의 답을 모아서 큰 문제 해결
- 중복되는 문제: 동일한 작은 문제를 반복적으로 해결해야 함

> 점화식: 인접한 항들 사이의 관계식을 의미함

### 다이나믹 프로그래밍 방식

- `탑다운(메모이제이션)(하향식)`: 한번 계산한 결과를 메모리공간에 메모

- `보텀업(상향식)`: 다이나믹 프로그래밍의 전형적인 형태

  결과 저장용 배열은 DP테이블이라고 부름

### 다이나믹 프로그매이 vs 분한절봉

분할정복은 동일한 부분문제가 반복적으로 계산되지 않음 ex) 퀵 정렬 (한번 기준 원소 pivot이 자리를 변경해서 자리를 잡으면 그 원소에 대한 위치 변경은 더 이상 없음)

### 접근하는 방법

1\) 다이나믹 프로그래밍 유형임을 파악

2\) 그리디, 구현, 완전탐색등의 아이디어로 문제를 해결할 수 있는지 검토할 수 있음 -> X이면 다이나믹 프로그래밍 고려

3\) 재귀함수로 비효율적인 완전탐색 프로그램을 작성한 뒤에 (탑다운) 작은 문제에서 구한답이 큰 문제에서 그대로 사용될 수 있으면, 코드를 개선하는 방법을 사용할 수 있음

> 점화식 도출 시간 소요가 많으면 난이도가 높은 것임

### 예제 코드

피보나치

단순 재귀 함수 피보나치 O(2^N) (중복 문제)

f(30)을 계산하기 위해서 약 10억가량의 연산!

```js
function fibo(x) {
  if (x === 1 || x === 2) {
    return 1;
  }
  return fibo(x - 1) + fibo(x - 2);
}
console.log(fibo(4));
```

탑다운 방식

시간 복잡도 O(N)

```js
let d = new Array(100).fill(0);

function fibo(x) {
  if (x === 1 || x === 2) return 1;
  if (d[x] != 0) return d[x];
  d[x] = fibo(x - 1) + fibo(x - 2);
  return d[x];
}

console.log(fibo(99));
```

보텀업

```js
let d = [];
d[1] = 1;
d[2] = 1;
let n = 99;

for (let i = 3; i <= n + 1; i++) {
  d[i] = d[i - 1] + d[i - 2];
}

console.log(d[99]);
```

개미 전사

```js
let input = `4
1 3 1 5`;

let N = Number(input.split("\n")[0]);
let arr = input.split("\n")[1].split(" ").map(Number);

let d = new Array(100).fill(0);

d[0] = arr[0];
d[1] = Math.max(arr[0], arr[1]);

for (let i = 2; i < N; i++) {
  d[i] = Math.max(d[i - 1], d[i - 2] + arr[i]);
}

console.log(d[N - 1]);
```

1로 만들기

```js
//  dp 형식이 아님
let input = 26;
let result = 0;

while (input != 1) {
  result++;
  if (input % 5 === 0) {
    input = input / 5;
    continue;
  } else if (input % 3 === 0) {
    input = input / 5;
    continue;
  } else if (input % 2 === 0) {
    input = input / 2;
    continue;
  } else {
    input -= 1;
    continue;
  }
}

console.log(result);
```

```js
let x = 26;

let d = new Array(30001).fill(0);

for (let i = 2; i < x + 1; i++) {
  //  우선 전의 값보다 1을 더해준다
  //  이것은 최악의 선택!
  d[i] = d[i - 1] + 1;

  // 최악 - > 최상의 선택으로
  if (i % 2 === 0) d[i] = Math.min(d[i], d[i / 2] + 1);
  if (i % 3 === 0) d[i] = Math.min(d[i], d[i / 3] + 1);
  if (i % 5 === 0) d[i] = Math.min(d[i], d[i / 5] + 1);
}

console.log(d[26]);
```

효율적인 화폐 구성

```js
let input = `2 15
2
3`;

let N = Number(input.split("\n")[0].split(" ")[0]);
let m = Number(input.split("\n")[0].split(" ")[1]);

//  N개의 화폐 단위 정보를 입력받기
let array = [];
for (let i = 1; i <= N; i++) {
  array.push(Number(input.split("\n")[i]));
}

//  한 번 계산된 결과를 저장하기 위한 DP 테이블 초기화
let d = new Array(m + 1).fill(Infinity);

d[0] = 0; // 다이나믹 프로그래밍 진행(보텀업)

for (let i = 0; i < N; i++) {
  for (let j = array[i]; j < m + 1; j++) {
    if (d[j - array[i]] != Infinity) {
      //  (i - k)원을 만드는 방법이 존재하는 경우
      d[j] = Math.min(d[j], d[j - array[i]] + 1);
    }
  }
}

if (d[m] === Infinity) console.log(-1);
else console.log(d[m]);
```

금광

```js
//  gpt에게 좀 물어봄
//  이해 좀 못함
let input = `2
3 4
1 3 3 2 2 1 4 1 0 6 4 7
4 4
1 3 1 5 2 2 4 1 5 0 2 3 0 6 1 2
`;

let test = Number(input.split("\n")[0]);

function get(n, m, arr) {
  let dp = [];
  for (let i = 0; i < n; i++) {
    dp.push(Array.from({ length: m }, () => 0));
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      dp[i][j] = arr[i * m + j];
    }
  }

  for (let j = 1; j < m; j++) {
    for (let i = 0; i < n; i++) {
      let leftUp, leftDown, left;

      if (i === 0) leftUp = 0;
      else leftUp = dp[i - 1][j - 1];
      if (i === n - 1) leftDown = 0;
      else leftDown = dp[i + 1][j - 1];

      left = dp[i][j - 1];
      dp[i][j] += Math.max(leftUp, Math.max(leftDown, left));
    }
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    result = Math.max(result, dp[i][m - 1]);
  }

  return result;
}

for (let i = 1; i < 2 * test; i += 2) {
  let [n, m] = input.split("\n")[i].split(" ").map(Number);
  let arr = input.split("\n")[i + 1].split(" ").map(Number);

  console.log(get(n, m, arr));
}
```

병사 배치하기 `가장 긴 증가하는 부분수열(LTS)`

```js
let input = `7
15 11 4 8 5 2 4`;

let num = Number(input.split("\n")[0]);

let array = input.split("\n")[1].split(" ").map(Number);

array.reverse();

let dp = new Array(array.length).fill(1);

for (let i = 1; i < num; i++) {
  for (let j = 0; j < i; j++) {
    if (array[j] < array[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(num - Math.max(...dp));
```
