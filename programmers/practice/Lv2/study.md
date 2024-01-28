# Lv2

## JadenCase 문자열 만들기

### `String.prototype.charAt()`

[mdn web docs_String.prototype.charAt()]("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/charAt")

charAt() 함수는 문자열에서 특정 인덱스에 위치하는 유니코드 단인문자를 반환합니다.

### `String.prototype.substring()`

[mdn web docs_String.prototype.substring()]("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substring")

substring() 메소드는 string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환합니다.

```js
const str = "Mozilla";
console.log(str.substring(2)); // "zilla"
```

### `String.prototype.toUpperCase()`

### `String.prototype.toLowerCase()`

## 이진 변환 반복하기

### `Number.prototype.toString()`

[mdn web docs]("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toString")

특정한 Number 객체를 나타내는 문자열을 반환합니다.

```js
var x = 6;
console.log(x.toString(2)); // 110
```

### `String.prototype.match()` - 추가 공부 필요함

[mdn web docs_String.prototype.match()]("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/match")

문자열이 정규식과 매치되는 부분을 검색합니다.

```js
str.match(regexp);
```

- regexp: 정규식 객체임

### `String.prototype.replace()`

[mde web docs_String.prototype.replace()]("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace")

```js
replace(pattern, replacement);
```
