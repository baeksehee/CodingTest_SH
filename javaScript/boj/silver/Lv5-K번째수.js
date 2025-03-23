// K번째 수

// 내 코드 1
// 시간: 6분
// 결과: 메모리 초과
// 원인 검색: 너무 많은 변수들을 배열 등에 저장할 경우
// 해결 방안 1. 배열에 너무 많은 값들이 들어가는 경우에는 값이 들어갈 수 있는 범위 제한 및 들어가는 데이터 수를 제한 하는 조건 등을 통해서 해결하실 수 있습니다.
// 출처) https://programmers-story.tistory.com/entry/%EB%B0%B1%EC%A4%80-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EC%B4%88%EA%B3%BC-%EB%B0%9C%EC%83%9D-%EC%9D%B4%EC%9C%A0-%EB%B0%8F-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EC%95%88
// 나의 생각: 지금 보니 입력값 배열이  A1, A2, ..., AN이 주어진다. (-109 ≤ Ai ≤ 109) 로 너무 크네
// 어떻게 해야할까. . ?
// 아 다시 보니 코드 길이가 커서 주어진 메모리제한 512MB보다 길네 길이를 줄어야겠다~
// 아 아니네~ 코드 길이가 메모리 초과랑 연관된게 아니구나
// 강의 자료의 counting sort 방법을 이용해보자
// 아 아니네~ 입력값 둘째에는 A1, A2, ..., AN이 주어진다. (-109 ≤ Ai ≤ 109) 배열들의 수가 0부터 N까지 이런 식으로 배열 숫자가 오는게 아니어서 counting sort는 못 사용하겠다. .
// 아 취소~ 입력값이 규칙이 없더라도 N이라는 수의 개수를 주었구나
const fs = require("fs");
let lines = fs.readFileSync(0).toString().split("\n"); // 교수님 강의 자료 부분 참고

const N = lines[0].split("")[0];
const K = lines[0].split("")[1];

const sortedNumbers = lines[1].split("").sort();

console.log(sortedNumbers[K - 1]);

// 내 코드2
// 시간: 40분
// 문제의 입력값을 보고 계수정렬을 공부하고 풀음
// 문제는 정수가 음의 정수까지 있다는 사실
// 입력
// 첫째 줄에 N(1 ≤ N ≤ 5,000,000)과 K (1 ≤ K ≤ N)이 주어진다.
// 둘째에는 A1, A2, ..., AN이 주어진다. (-10^9 ≤ Ai ≤ 10^9)

const fs = require("fs");
let lines = fs.readFileSync(0).toString().split("\n"); // 교수님 강의 자료 부분 참고

const N = lines[0].split("")[0];
const K = lines[0].split("")[1];

const stringNumbers = lines[1].split("");
const numberedArray = stringNumbers.map((e) => Number(e));

const nMin = Math.min(numberedArray);
const nMax = Math.max(numberedArray);

const count = new Array(-nMin + nMax + 1).fill(0);

for (let i = 0; i < numberedArray.length; i++) {
  let target = numberedArray[i];
  if (target < 0) {
    count[target - nMin]++;
  } else {
    count[target + nMin]++;
  }
}

let index = 0;

// 이 계수정렬 코드가 머릿속에 없어서 강의 자료를 참고함
for (let i = 0; i < count.length; i++)
  while (count[i] > 0) {
    numberedArray[index++] = i - nMin;
    count[i]--;
  }

console.log(numberedArray[K]);

// 내 코드 3
// 시간 1분
// 참고 자료의 출처) https://yunicornlab.tistory.com/48
// 고친 부분 split("") -> split(" ")로 고침
const fs = require("fs");
let lines = fs.readFileSync(0).toString().split("\n"); // 교수님 강의 자료 부분 참고

const N = lines[0].split(" ")[0];
const K = lines[0].split(" ")[1];

const sortedNumbers = lines[1].split(" ").sort();

console.log(sortedNumbers[K - 1]);

// 내 코드 4
// 시간: 1분
// 결과: 틀렸습니다.
const fs = require("fs");
let lines = fs.readFileSync(0).toString().split("\n"); // 교수님 강의 자료 부분 참고

const [N, K] = lines[0].split(" ").map(Number);

const sortedNumbers = lines[1].split(" ").map(Number).sort();

console.log(sortedNumbers[K - 1]);

// 내 코드 5
// 시간: 1분
// 결과: 맞았습니다!
// 결과적으로는 1번째 코드의 접근이 맞았음
// 틀린이유 분석하자면
// 1. split("") -> split(" ")
// 2. map(Number)를 sort()앞에 두어야함, gpt 말로는 문자열 정렬 수행이 결과가 다르게 나올 뿐더러 유니코드 기준 정렬이라 느릴 수 있다고 함
// 3. gpt의 말로 sort((a, b) => a - b)를 사용해야 숫자로 정렬됨, 강의 자료를 제대로 참고 안 했
const fs = require("fs");
let lines = fs.readFileSync(0).toString().split("\n"); // 강의 자료 부분 참고

const [N, K] = lines[0].split(" ").map(Number);

const sortedNumbers = lines[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

console.log(sortedNumbers[K - 1]);
