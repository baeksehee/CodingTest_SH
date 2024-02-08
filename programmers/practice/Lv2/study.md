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

## 괄호 회전하기

### continue

[mdn web docs_continue]("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/continue")

`continue`문은 현재 또는 레이블이 지정된 루프의 현재 반복에서 명령문의 실행을 종료하고 반복문의 처음으로 돌아가여 루프문의 다음 코드를 실행합니다.

```js
let text = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}

console.log(text); //    012456789
```

### break

`break` 문은 현재 반복문, `switch`문 또는 `lable`문을 종료하고, 그 다음 문으로 프로그램 제어를 넘깁니다.

```js
//  나만 사랑하는 코드
let i = ["나", "는", "나", "를", "사", "랑", "해", "너", "도"];

let result = "";

let leng = 0;

while (leng < 10) {
  if (leng === 7) {
    break;
  }
  result += i[leng];
  leng++;
}

console.log(result);
```

## [3차]n진수 게임

### 16진수

(십진수, 16진수)
(0, 0)
(1, 1)
(2, 2)
(3, 3)
(4, 4)
(5, 5)
(6, 6)
(7, 7)
(8, 8)
(9, 9)
(10, a)
(11, b)
(12, c)
(13, d)
(14, e)
(15, f)
