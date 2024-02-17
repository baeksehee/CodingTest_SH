## 정렬 알고리즘

["(이코테 2021 강의 몰아보기) 4. 정렬 알고리즘"-동빈나]("https://www.youtube.com/watch?v=KGyK-pNvWos")

정렬이란 데이터를 특정한 기준에 따라 순서대로 나열하는 것

### 선택 정렬: 처리되지 않은 데이터 중에서 가장 작은 데이터를 선택해 맨 앞에 있는 데이터와 바꾸는 것을 반복

```js
//  선택 정렬
let array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for (let i = 0; i < array.length - 1; i++) {
  let min_index = i;
  for (let j = i; j < array.length; j++) {
    if (array[min_index] > array[j]) min_index = j; // 근데 index에 i대신 min_index를 꼭 넣어야 하는 이유를 잘 모르겠음
  }
  let temp = array[i];
  array[i] = array[min_index];
  array[min_index] = temp;
}

console.log(array);
```

### 삽입 정렬: 처리되지 않은 데이터를 하나씩 골라 적절한 위치에 삽입함

```js
//  삽입 정렬
let array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for (let i = 1; i < array.length; i++) {
  for (let j = i; j > 0; j--) {
    if (array[j] < array[j - 1]) {
      let temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
    } else break;
  }
}

console.log(array);
```

### 퀵 정렬: 기준 데이터를 설정하고 그 기준보다 큰 데이터와 작은 데이터의 위치를 바꾸는 방법

```js
let array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];
let n = 10;

function quickSort(arr, start, end) {
  if (start >= end) return; // 원소가 1개인 경우 종료
  let pivot = start; // 피벗은 첫 번째 원소
  let left = start + 1;
  let right = end;

  while (left <= right) {
    //  피벗보다 큰 데이터를 찾을 때까지 반복
    while (left <= end && arr[left] <= arr[pivot]) left++;
    //  피벗보다 작은 데이터를 찾을 때까지 반복
    while (right > start && arr[right] >= arr[pivot]) right--;
    // 엇갈렸다면 작은 데이터와 피벗을 교체
    if (left > right) {
      let temp = arr[pivot];
      arr[pivot] = arr[right];
      arr[right] = temp;
    } else {
      // 엇갈리지 않았다면 작은 데이터와 피벗을 교체
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }
  }
  // 분할 이후 왼쪽 부분과 오른쪽 부분에서 각각 정렬 수행
  quickSort(arr, start, right - 1);
  quickSort(arr, right + 1, end);
}
quickSort(array, 0, n - 1);
console.log(array);
```

### 계수정렬 알고리즘 : 계수정렬은 데이터의 크기 범위가 제한되어 정수 형태로 표현할 수 있을 때 사용하는 방법

> 1\.인덱스 계수

> 2\. 데이터를 하나씩 확인하며 데이터의 값과 동일한 인덱스의 데이터를 1씩 증가시킴

> 3\.결과를 확인할 때는 리스트의 첫번째 데이터부터 하나씩 1값만큼 반복하여 인덱스를 출력함

```js
let array = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2];

let count = new Array(Math.max(...array) + 1).fill(0);

for (let i = 0; i < array.length; i++) {
  count[array[i]] += 1;
}

for (let i = 0; i < count.length; i++) {
  for (let j = 0; j < count[i]; j++) {
    console.log(i);
  }
}
```

### 예제 코드

두 배열의 원소 교체 (시간 복잡도는 잘 모르겠음)

```js
let A = [1, 2, 5, 4, 3];
let B = [5, 5, 6, 6, 5];
let K = 3;

function sort(A, B, K) {
  while (K > 0) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    if (A[0] < B[0]) {
      let temp = B[0];
      B[0] = A[0];
      A[0] = temp;
    }
    K--;
  }

  let result = 0;
  A.map((e) => (result += e));
  return result;
}

console.log(sort(A, B, K));
```
