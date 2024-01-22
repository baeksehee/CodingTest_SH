# HASH

## 1.Map

[mdn web docs_Map](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map)

`Map` 객체는 키-값 쌍과 키의 원래 삽입 순서를 기억함

맵에 데이터를 저장하는 올바른 방법은 `set(key, value)` 메서드를 사용하는 것

```js
//  생성자 Map(): 새로운 Map 객체를 생성함
const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true
contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
console.log(contacts.size); // 1
contacts.delete("Jessie"); // true
```

`for...of`로 맵 순회하기

```js
const myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one

for (const key of myMap.keys()) {
  console.log(key);
}
// 0
// 1

myMap.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});
// 0 = zero
// 1 = one
```

다른 내용 생략!

## 2.Set

[mdn web docs_Set]("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set")

> Set objects are collections of values. A value in the set may only occur once; it is unique in the set's collection.
