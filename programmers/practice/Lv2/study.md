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

## 주차 요금 계산

### `Object.entries()`

[mdn web docs1_Object.entries()]("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries")

`Object.entries()`메서드는 `for...in`와 같은 순서로 주어진 객체 자체의 enumerable 속성 `[key, vaule]` 쌍의 배열을 반환합니다.

### `Array.prototype.forEach()`

[mdn web docs_Array.prototype.forEach()]("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach")

`Array` 인스턴스의 `forEach()` 메서드는 각 배열 요소에 대해 제공된 함수를 한 번씩 실행합니다.

```js
const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));

//  element: 배열에서 처리 중인 현재 요소
//  index: 배열에서 처리 중인 현재 요소의 인덱스
```

## 롤 케이크 자르기

### Map

[mdn web docs_Map]("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map")

- `Map` 객체는 키-값 쌍과 키의 원래 삽입 순서를 기억함
- `Map`에서의 키는 오직 단 하나만 존재함
- `for...of`루프는 각 반복에 대해 `[key, value]`로 이루어진 멤버가 2개인 배열을 반환
- `Map`의 명세는 "평균적으로 집합 내 요소의 수에 따라 하위 선형인 접근 시간을 제공하는"맵을 구현해야 한다고 기술되어 있음
- 복잡성이 O(N)보다 더 나은 경우 내부적으로 해시 테이블(O(1)룩업) 데이터 구조로 표현될 수 있음
- object의 키는 string 또는 Symbol이어야 함

#### 객체 속성 설정하기

```js
// 올바른 방법 ❌
const wromgMap = new Map();
wrongMap["bla"] = "blaa";
worngMap.has("bla"); // false
```

```js
//  올바른 방⭕
const contatcts = new Map();
contacts.set("jJessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined
contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true
console.log(cantacts.size); // 1
```

#### Map 사용하기

```js
const myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}

//  of 뒤에
//  myMap.keys(); key만
//  myMap.vaules(); values만
//  myMap.entries(); myMap 이랑 똑같음 keys-values
```

```js
myMap.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});
```

## [3차] 파일명 정렬

### `String.prototype.localeCompare()`

[mdn web docs_String.prototype.localeCompare()]("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare")

`localeCompare()` 메서드는 참조 문자열이 정렬 순으로 지정된 문자열 앞 혹은 뒤에 오는지 또는 동일한 문자열인지 나타내는 수치를 반환함

```js
referencesStr.localeCompare(compareString);
```

- compareString 전에 referencesStr이 오면 음수: 즉, referenceStr가 순서가 먼저인게 맞을 때
- compareString 뒤에 referencesStr이 오면 양수: 순서가 반대일 때
- 동등한 경우 0을 반환: 순서가 같았을 때

#### `sort()로 문자열 순서 정렬하기`

[mdn web docs_sort]("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort")

```js
let alphabet = ["a", "c", "b"];
alphabet.sort((a, b) => a.localeCompare(b));
//  양수일 때 b를 a보다 낮은 인덱스로 소트
console.log(alphabet);
```
