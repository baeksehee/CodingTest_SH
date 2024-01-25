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
