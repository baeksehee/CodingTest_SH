# Sorting

## 1. Array.prototype.slice()

[mdn web docs_Array.prototype.slice()]("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice")

slice() 메서드는 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.

## 2. Array.prototype.sort()

[mdn web docs_Array.prototype.sort()]("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort")

정렬 오름차순

```js
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);

var numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);

// [1, 2, 3, 4, 5]
```
