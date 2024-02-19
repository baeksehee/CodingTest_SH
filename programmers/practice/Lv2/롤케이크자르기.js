//  롤케이크 자르기
//  정확성:
//  시간:

//  내 코드1
//  정확성: ❌
//  시간: 13분
//  원인: 시간초과
//  롤케이크의 크기 상관없이, 토핑의 개수 상관없이, 토핑의 가짓수가 같게!
//  공평하게 안 나눠질 때도 있음 그럴때는 0을 반환
function solution(topping) {
  let answer = 0;

  for (let i = 0; i < topping.length; i++) {
    let me = new Set();
    let you = new Set();
    let meRange = topping.slice(0, i + 1);
    let youRange = topping.slice(i + 1);
    // console.log(meRange, youRange);

    meRange.map((e) => me.add(e));
    youRange.map((e) => you.add(e));
    // me.add(...meRange);
    // you.add(...youRange);
    // console.log(me, you);

    if (me.size === you.size) answer++;
  }

  return answer;
}

//  내 코드2
//  정확성: ❌
//  시간: 6분
//  원인: 시간초과
function solution(topping) {
  let answer = 0;

  for (let i = 0; i < topping.length; i++) {
    let meRange = topping.slice(0, i + 1);
    let youRange = topping.slice(i + 1);
    let me = new Set(meRange);
    let you = new Set(youRange);

    if (me.size === you.size) answer++;
  }

  return answer;
}

//  내 코드3
//  이게 최선이다.
function solution(topping) {
  let answer = 0;

  topping.map((e, i) => {
    if (
      new Set(topping.slice(0, i + 1)).size ===
      new Set(topping.slice(i + 1)).size
    )
      answer++;
  });

  return answer;
}

//  [Programmers] 롤케이크 자르기 - JavaScript
//  Joosi_Cool·2023년 3월 27일
//  velog
//  시간 복잡도로 Map 활용
function solution(topping) {
  let answer = 0;
  let old = new Map();
  let young = new Map();

  //  old로 케이크 토핑 다 줌
  for (let i = 0; i < topping.length; i++) {
    if (old.has(topping[i])) {
      old.set(topping[i], old.get(topping[i]) + 1);
    } else {
      old.set(topping[i], 1);
    }
  }

  // young 에 첫 부분부터 토핑을 잘라줌
  // 잘라주면 그 앞 부분 즉 old에 저장된 그 부분을 -1해줌
  for (let i = 0; i < topping.length; i++) {
    if (young.has(topping[i])) {
      young.set(topping[i], old.get(topping[i]) + 1);
    } else {
      young.set(topping[i], 1);
    }

    if (old.get(topping[i]) === 1) {
      // get으로 작성해서 틀렸음..
      old.delete(topping[i]);
    } else old.set(topping[i], old.get(topping[i]) - 1);

    if (young.size === old.size) answer++;
  }

  return answer;
}

//  프로그래머스 - 다른 사람의 풀이
//  Set으로 풀어서 가지고 옴
//  아직 안 봄
function solution(topping) {
  const a = new Set();
  const b = {};

  let answer = 0;
  let check = 0;

  for (let i = 0; i < topping.length; i++) {
    if (b[topping[i]]) {
      b[topping[i]]++;
    } else {
      b[topping[i]] = 1;
      check++;
    }
  }

  for (let i = 0; i < topping.length; i++) {
    a.add(topping[i]);
    b[topping[i]]--;

    if (!b[topping[i]]) check--;
    if (a.size === check) answer++;
  }

  return answer;
}

//  복습 ❌`
//  허술한 점이 많은 코드
//  앗! 배열처럼 접근하면 안 되는구나 () 이렇게 접근 해야함
//  has로 있는지 확인해야 함
function solution(topping) {
  let answer = 0;
  let me = new Map();
  let you = new Map();

  for (let i = 0; i < topping.length; i++) {
    if (me[topping[i] + 1]) {
      me.set(topping[i] + 1, (me.get[topping[i] + 1] += 1));
    } else me.set(topping[i] + 1, 1);

    console.log(me);
  }

  for (let j = 0; j < topping.length; j++) {
    if (you[topping[j] + 1]) {
      you.set(topping[j], you.get[topping[j] + 1] + 1);
    } else you.set(topping[j], 1);

    if (me.get[topping[j] + 1 > 1]) {
      me.set(topping[j], me.get[topping[j] + 1] - 1);
    } else me.delete(topping[j]);

    // console.log(you.size === me.size);
    // console.log(me, you);
    if (you.size === me.size) answer++;
  }

  return answer;
}

//  복복습
//  ⭕
//  Map 재미있음
function solution(topping) {
  let answer = 0;
  let me = new Map();
  let bro = new Map();

  for (let i = 0; i < topping.length; i++) {
    if (me.has(topping[i])) {
      me.set(topping[i], me.get(topping[i]) + 1);
    } else {
      me.set(topping[i], 1);
    }
  }

  for (let i = 0; i < topping.length; i++) {
    if (bro.has(topping[i])) {
      bro.set(topping[i], bro.get(topping[i]) + 1);
    } else {
      bro.set(topping[i], 1);
    }

    if (me.get(topping[i]) === 1) {
      me.delete(topping[i]);
    } else {
      me.set(topping[i], me.get(topping[i]) - 1);
    }

    if (me.size === bro.size) answer++;
  }

  return answer;
}
