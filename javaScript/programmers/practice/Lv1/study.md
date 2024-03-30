# Lv1

## 푸트 파이트 대회

[mdn](https://developer.mozilla.org/ko/)

### `Array.prototype.map()`

배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환

```js
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x, i) => {
  console.log(i);
  return x * 2;
});

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
```

### `Array.prototype.reverse()`

배열의 순서를 반전

```js
const array1 = ["one", "two", "three"];
array1.reverse();
```

### `String.prototype.repeat()`

문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환함

```js
"abc".repaeat(2); // 'abcabc'
// 매개변수는 count로 문자열을 반복할 횟수. 0과 양의 무한대 사이의 정수
```

### `Array.prototype.push()`

배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환함

```js
const animals = ["pigs", "goats", "sheep"];

const count = animals.push("cows");
console.log(count);
// Expected output: 4
console.log(animals);
//
```

### `Array.prototype.unshift()`

> push()와 비교됨

새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환함

```js
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// Expected output: 5

console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]
```

### `Array.prototype.join()`

배열의 모든 요소를 쉼표나 지정된 구분 문자열로 구분하여 연결한 새 문자열을 만들어 반환합니다. 배열에 항목이 하나만 있는 경우, 해당 항목은 구분 기호를 사용하지 않고 반환

```js
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"
```

### `Array.prototype.concat()`

Array 인스턴스의 concat() 메서드는 두 개 이상의 배열을 병합하는 데 사용됩니다. 이 메서드는 기존 배열을 변경하지 않고, 새 배열을 반환

```js
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]
```

## 평균 구하기

### `Array.prototype.reduce()`

[mdn web docs]("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce")

배열의 각 요소에 대해 주어진 리듀서(reducer)함수를 실행하고, 하나의 결과값을 반환함

```js
[0, 1, 2, 3, 4].reduce((prev, curr) => prev + curr);
```

## x만큼 간격이 있는 n개의 숫자

```js
//  다른 사람의 풀이

function solution(x, n) {
  return Array(n) //  길이가 n인 배열 생성
    .fill(x) // x 즉 배수를 담아서 map에서 v 배수 값과 인덱스 + 1 이라는 수를 곱함 편리하게!
    .map((v, i) => (i + 1) * v);
}
```

### `Array.prototype.fill()`

[mdn web docs]("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/fill")

배열의 인덱스 범위 내에 있는 모든 요소르 정적 값으로 변경함
그리고 수정된 배열을 반환함

```js
const array1 = [1, 2, 3, 4];
console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]
```

## 문자열 내 p와 y의 개수

mdn

### `String.prototype.toUpperCase()`, `String.prototype.toLowerCase()`

## 하샤드 수

### `do...while`

[mdn web docs_do...while]("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/do...while")

```js
do {
  statement:
} while (condition);

```

- 구문: 테스트 조거니 참일 때마다 한 번이상 실행되는 구문임
- 조건식: 루프가 실행될 때마다 평가되는 식 (조건식이 참으로 평가되었을 때)

### `Math.floor()`

[mdn web docs_Math.floor()]("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor")
The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.

## 두 정수 사이의 합

### `기본값 매개변수`

기본값 함수 매개변수 (default function parameter)를 사용하면 값이 전달되지 않거나 `undefined`인 경우 명명된 매개변수를 기본값으로 초기화할 수 있습니다.

```js
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5));
//  Expected output: 5
```

### `Math.min()`

The Math.min() static method returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters.

## 나누어 떨어지는 숫자 배열

### `Array.prototype.filter()`

`filter()`메서드는 주어진 배열의 일부에 대한 얕은 복사본을 생성하고, 주어진 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링 합니다.

map과 filter을 사용할 때 filter가 속도가 좋음

```js
let x = 3;
let arr = [1, 2, 3, 4, 5, 6, 7];
let answer = [];
let filterArr = [1, 2, 3, 4, 5, 6, 7];

arr.map((e) => {
  if (e % x === 0) {
    answer.push(e);
  }
});

console.log(answer);

let filterArray = filterArr.filter((e) => e % x === 0);

console.log(filterArray);
```

## 핸드폰 번호 가리기

### `Array.prototype.slice()`

[mdn web docs_Array.prototype.slice(]("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice")

어떤 배열의 `begin`부터 `end`까지(`end` 미포함)에 대해 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.

```js
const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(-2)); // Array ["duck", "elephant"]
```

## 가운데 글자 가져오기

### `String.prototype.substr()` - 이제는 거의 사용할 수 없는 메서드인 것으로 보임

[mdn web docs_String.prototype.substr()]("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substr")

문자열에서 특정 위치에서 시작하여 특정 문자 수 만큼의 문자들을 반환합니다.

### `Math.ceil()` - `Math.floor()`랑 비교됨

주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환합니다.

## 약수의 개수와 덧셈

### `Math.sqrt()`

[mdn web docs_Math.sqrt()]("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt")

```js
Math.sqrt(2); // 1.414213562373095
Math.sqrt(9); // 3
```

### `Number.isInteger()`

주어진 값이 정수인지 판별합니다.
