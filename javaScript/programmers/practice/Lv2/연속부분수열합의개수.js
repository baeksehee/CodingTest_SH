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

//  복습

//  연속된 부분 수열의 합
//  11시 14분
//  시간초과임

function solution(sequence, k) {
  let answer = [];

  sequence.forEach((s, i) => {
    let num = s;
    if (s === k) {
      answer = [i, i];
    }
    for (let j = i + 1; j < sequence.length; j++) {
      num += sequence[j];
      if (num === k) {
        if (answer.length === 0) answer.push(i, j);
        else {
          if (j - i === answer[1] - answer[0]) break;
          else if (j - i < answer[1] - answer[0]) {
            answer.pop();
            answer.pop();
            answer.push(i, j);
          }
        }
        break;
      } else if (num > k) break;
    }
  });
  return answer;
}

//  JAVASCRIPT, PROGRAMMERS, LV2
//  [프로그래머스] 연속된 부분 수열의 합 - JavaScript
//  Apr 20, 2023 LeeJam
//  투 포인터 알고리즘!
function solution(sequence, k) {
  let answer = [0, 1000000];
  let left = 0;
  let right = 0;
  let sum = sequence[0];

  while (right < sequence.length) {
    if (sum === k) {
      if (answer[1] - answer[0] > right - left) {
        // left , right 인덱스 사이의 거리가 적을시 answer 업데이트
        answer[0] = left; //  그리고 이미 가장 사이의 거리가 적은 left, right로 업데이트 되어있으면 x
        answer[1] = right;
      }
      //  left right를 하나씩 올려주는 이유는!
      //  이미 sum 값이 k 이므로
      //  right만 올리면 sum > k
      //  left만 올리면 sum < k
      //  둘다 올려주는 걸로
      sum -= sequence[left++];
      sum += sequence[++right];
    } else if (sum > k) {
      //  sum이 k 보다 클 때
      sum -= sequence[left++];
    } else if (sum < k) {
      //  sum이 k 보다 작을 때
      sum += sequence[++right];
    }
  }

  return answer;
}
