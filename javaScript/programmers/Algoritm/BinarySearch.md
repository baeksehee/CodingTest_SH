## 이진 탐색 알고리즘

[(이코테 2021 강의 몰아보기) 5. 이진 탐색-동빈나]("https://www.youtube.com/watch?v=94RC-DsGMLo&list=PLRx0vPvlEmdAghTr5mXQxGpHjWqSz0dgC&index=5")

- 순차탐색: 리스트 안에 있는 특정한 데이터를 찾기 위해 앞에서부터 데이터를 하나씩 확인하는 방법
- 이진 탐색: 정렬되어 있는 리스에서 탐색 범위를 절반씩 좁혀가며 데이터를 탐새하는 방법

```js
let input = `10 7
1 3 5 7 9 11 13 15 17 19
4`;

let n = Number(input.split("\n")[0].split(" ")[0]);
let target = Number(input.split("\n")[0].split(" ")[1]);
let arr = [];

arr = input.split("\n")[1].split(" ").map(Number);

function binarySearch(arr, target, start, end) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    //  찾은 경우 중간점 인덱스 반환
    if (arr[mid] == target) return mid;
    //  중간점의 값보다 찾고자 하는 값이 작은 경우 왼쪽 확인
    else if (arr[mid] > target) end = mid - 1;
    //  중간점의 값보다 찾고자 하는 값이 큰 경우 오른쪽 확인
    else start = mid + 1;
  }
  return -1;
}

let result = binarySearch(arr, target, 0, n - 1);

if (result === -1) console.log("원소가 존재하지 않습니다.");
else console.log(result + 1);
```

- 파라메트릭 서치: 최적화 문제를 결전 문제('예' 혹은 '아니오')로 바꾸어 해결하는 기법

### 예제 코드

떡볶이 떡 만들기

```js
//  내가 푼 코드
//  조건이 길어서 아마 시간 초과 예상
let input = `4 6
19 15 10 17`;

let N = Number(input.split("\n")[0].split(" ")[0]);
let M = Number(input.split("\n")[0].split(" ")[1]);
let arr = input.split("\n")[1].split(" ").map(Number);

function solution(N, M, arr) {
  let leng = Math.max(...arr);
  let get = 0;
  arr.sort((a, b) => b - a);
  while (get < M) {
    get = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= leng) {
        get += arr[i] - leng;
      } else break;
    }
    leng--;
  }

  console.log(leng + 1);
}

solution(N, M, arr);
```

> 큰 탐색 범위를 보면 가장 먼저 이진 탐색을 떠올려야 한다고 함
>
> '현재 이 높이로 자르면 조건을 만족할 수 있는가?' 조건의 만족 여부("예" 혹은 "아니오")에 따라서 탐색 범위를 좁혀서 해결할 수 있음

```js
let input = `4 6
19 15 10 17`;

let N = Number(input.split("\n")[0].split(" ")[0]);
let M = Number(input.split("\n")[0].split(" ")[1]);
let arr = input.split("\n")[1].split(" ").map(Number);

function search(m, arr) {
  let start = 0;
  let end = Math.max(...arr);

  let result = 0;
  while (start <= end) {
    let total = 0;
    let mid = Math.floor((start + end) / 2);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > mid) total += arr[i] - mid;
    }

    // 떡의 양이 부족한 경우 더 많이 자르기 (왼쪽 부분 탐색)
    if (total < m) end = mid - 1;
    else {
      // 떡의 양이 충분한 경우 덜 자르기 (오른쪽 부분 탐색)
      result = mid;
      start = mid + 1;
    }
  }

  console.log(result);
}

search(M, arr);
```

정렬된 배열에서 특정 수의 개수 구하기

```js
//  내가 푼 코드
//  시간 초과 예상
let input = `7 2
1 1 2 2 2 2 3`;

let x = input.split("\n")[0].split(" ")[1];
let arr = input.split("\n")[1].split(" ").map(Number);

function count(x, arr) {
  let start = 0;
  let end = arr.length - 1;

  while (arr[start] != x || arr[end] != x) {
    if (arr[start] != x) start += 1;
    if (arr[end] != x) end -= 1;
  }
  console.log(end - start + 1);
}

count(x, arr);
```

> 시간 복잡도 O(logN)으로 동작하는 알고리즘을 요구하고 있음
>
> 일반적인 선형 탐색로는 시간 초과 판정 받음
>
> 하지만 데이터가 정렬되어 있기 때문에 이진 탐색을 수행할 수 있음
>
> 특정 값이 등장하는 첫 번째 위치와 마지막 위치를 찾아 위치 차이를 계산해 문제를 해결할 수 있음

```js
//  gpt에게 물어본 코드
let input = `7 2
1 1 2 2 2 2 3`;

let x = Number(input.split("\n")[0].split(" ")[1]);
let arr = input.split("\n")[1].split(" ").map(Number);

function firstIndex(x, arr) {
  let start = 0;
  let end = arr.length - 1;
  let result = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] >= x) {
      if (arr[mid] === x) result = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return result;
}

function lastIndex(x, arr) {
  let start = 0;
  let end = arr.length - 1;
  let result = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] <= x) {
      if (arr[mid] === x) result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
}

function count(x, arr) {
  let first = firstIndex(x, arr);
  let last = lastIndex(x, arr);

  if (first === -1 || last === -1) {
    console.log(0);
  } else {
    console.log(last - first + 1);
  }
}

count(x, arr);
```
