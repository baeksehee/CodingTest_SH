//  메뉴 리뉴얼
//  정확성: ❌
//  시간: 50분

//   내 코드1
//  3시 4분
//  이전에 각 손님들이 주문할 대 가장 많이 함께 주문한 단품메뉴들을 코스요리 메뉴로 구성
//  최소 2가지 이상의 단품메뉴로 구성
//  최소 2명 이상의 손님으로부터 주문된 단품메뉴 죠합에 대해서만 코스 요리
//  map을 활용해도 좋겠지만
//  완전 탐색 맞징?
//  조건은 해당 코스를 주문한 사람의 2 명 이상이고
//  course에 해당하는 수 일때
function solution(orders, course) {
  let answer = [];
  let courses = {};

  orders = orders.filter((e) => e.length >= Math.min(...course));

  function make(currentCourse, order) {
    if (course.includes(currentCourse.length)) {
      if (courses.hasOwnProperty(currentCourse)) {
        // hasOwnProperty 검색 찬스!
        courses[currentCourse] += 1;
      } else {
        courses[currentCourse] = 1;
      }
    }

    if (currentCourse.length === order.length) return;

    for (let i = 0; i <= order.length; i++) {
      if (currentCourse.includes(order[i])) continue;
      let newCourse = currentCourse + order[i];
      make(newCourse, order);
    }
  }

  orders.forEach((order) => {
    make("", order);
  });

  for (let [c, keys] of Object.entries(courses)) {
    //entries 스펠링 검색 ..
    if (course.includes(keys)) answer.push(c);
  }

  return answer;
}

//  내 코드2
//  테케는 통과되었지만
//  제출의 테스트들을 틀리고 시간복잡도도 상당히 높나보다.
function solution(orders, course) {
  let answer = Array.from({ length: Math.max(...course) + 1 }, (e) => []);
  let leng = Array.from({ length: Math.max(...course) + 1 }, (e) => 0);
  let courses = {};

  orders = orders.filter((e) => e.length >= Math.min(...course));

  function make(currentCourse, order) {
    if (course.includes(currentCourse.length)) {
      if (courses.hasOwnProperty(currentCourse)) {
        // hasOwnProperty 검색 찬스!
        courses[currentCourse] += 1;
      } else {
        courses[currentCourse] = 1;
      }
    }

    if (currentCourse.length === order.length) return;

    for (let i = 0; i <= order.length; i++) {
      if (currentCourse.includes(order[i])) continue;
      let newCourse = currentCourse + order[i];
      make(newCourse, order);
    }
  }

  orders.forEach((order) => {
    make("", order);
  });

  //  최대 요청을 알기 위해서
  for (let [c, keys] of Object.entries(courses)) {
    if (c.split("").sort().join("") !== c) continue;
    if (course.includes(keys)) {
      if (leng[c.length] < keys) {
        leng[c.length] = keys;
      }
    }
  }

  for (let [c, keys] of Object.entries(courses)) {
    if (c.split("").sort().join("") !== c) continue;
    // console.log(leng[c.length], keys);
    if (leng[c.length] === keys) {
      answer[c.length].push(c);
    }
  }
  return answer.flat().sort();
}

//  참고
//  [프로그래머스] 메뉴 리뉴얼 / JavaScript / Level 2
//  KimYoungWoong·2022년 6월 25일

function solution(orders, course) {
  let answer = [];

  const combination = (arr, length) => {
    let result = [];

    if (length === 1) return arr.map((v) => [v]);

    arr.forEach((v, i, origin) => {
      let part = origin.slice(i + 1);
      let combinations = combination(part, length - 1);
      let combinationsResult = combinations.map((p) =>
        [v, ...p].sort().join("")
      );
      result.push(...combinationsResult);
    });

    return result;
  };

  for (let i = 0; i < course.length; i++) {
    let map = {};
    let max = 0;

    orders.forEach((order) => {
      combination(order.split(""), course[i]).forEach((v) => {
        if (!map[v]) map[v] = 1;
        else map[v] += 1;
      });

      for (let k in map) {
        if (map[k] > max) max = map[k];
      }
    });

    for (let k in map) {
      if (map[k] === max && max > 1) answer.push(k);
    }
  }

  return answer.sort();
}
