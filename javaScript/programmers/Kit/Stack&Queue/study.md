# Stack&Queue

## Array.prototype.push()

[mdn web docs_Array.prototype.push()]("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push")

`push()` 메서드는 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환함

```js
const animals = ["pigs", "goats", "sheep"];

const count = animals.push("cows");
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]
```

## Array.prototype.filter()

[mdn web docs_Array.prototype.filter()]("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter")

Array 인스턴스의 `filter() 메서드`는 주어진 배열의 일부에 대한 얕은 복사본을 생성하고, 주어진 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링 합니다.

```js
filter(callbackFn);
filter(callbackFn, thisArg);
```

매개변수

- `callbackFn`: 참을 반환하면 유지
  - element : 배열에서 처리 중인 현재 요소
  - index: 배열에서 처리 중인 현재 요소의 인덱스
