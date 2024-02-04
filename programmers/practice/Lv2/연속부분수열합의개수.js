//  연속 부분 수열 합의 개수
//  정확성: ❌
//  시간: 53분

//  내 코드1

function solution(elements) {
  let answer = 0;
  let totalLength = elements.length - 1;
  let arr = [];

  for (let i = 1; i <= elements.length; i++) {
    // 길이 i

    elements.map((e, index) => {
      let result = 0;
      let leng = i;
      while (leng > 0) {
        if (leng + index <= totalLength) result += elements[leng + index];
        else result += elements[leng + index - totalLength];
        leng--;
      }
      arr.push(result);
    });
  }

  let setArr = new Set(arr);
  arr = Array.from(setArr).sort((a, b) => a - b);

  console.log(arr);

  return answer;
}

//  프로그래머스 - 다른 사람의 풀이 참고
//  circle이라는 점과, 부분 수열의 최대 길이가 처음에 주어진 배열의 길이이하라는 걸 이용해서
//  concat을 활용함 점 정말 똑똑하다.
function solution(elements) {
  let answer = 0;
  const circle = elements.concat(elements);
  const maxLength = elements.length;
  const set = new Set(elements);

  for (let i = 0; i < maxLength; i++) {
    circle.map((e, index) => {
      let indexLength = i;
      let result = 0;
      while (indexLength >= 0) {
        result += circle[index + indexLength];
        indexLength--;
      }
      set.add(result);
    });
  }

  answer = Array.from(set).length - 1;
  return answer;
}

//  복습코드 ⭕
//  20분

function solution(elements) {
  let answer = 0;
  let leng = elements.length;
  let circleArray = elements.concat(elements);
  let results = [];

  for (let i = 1; i <= leng; i++) {
    // 부분 수열 배열의 길이

    for (let j = 0; j < leng; j++) {
      //  적용시킬 index
      let result = 0;
      let el = circleArray.slice(j, j + i);
      el.map((e) => (result += e));
      results.push(result);
    }
  }

  let set = new Set(results);
  answer = Array.from(set).length;

  return answer;
}

//  프로그래머스 - 다른 사람의 풀이
//  for문 기준 적용 인덱스 -> 배열의 길이
function solution(elements) {
  let answer = 0;
  let leng = elements.length;
  let circleArray = elements.concat(elements);
  let results = [];

  for (let i = 0; i < leng; i++) {
    // index 위치
    let result = 0;
    for (let j = 1; j <= leng; j++) {
      //  적용시킬 배열의 길이
      result += circleArray[i + j];
      // let el = circleArray.slice(j, j + i);
      // el.map((e) => (result += e));
      results.push(result);
    }
  }

  console.log(results);

  let set = new Set(results);
  answer = Array.from(set).length;

  return answer;
}
