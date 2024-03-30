//  구명보트
//  정확성: ❌
//  효율성: ❌
//  시간: 20분 (1차 코드실행만 ⭕)

// 내 코드 1
function solution(people, limit) {
  let answer = 0;
  let kg = 0;

  while (people.length > 0) {
    let plus = [];
    let plusIndex = [];
    people.map((e, i) => {
      if (i !== 0 && people[0] + e <= limit) {
        plus.push(e);
        plusIndex.push(i);
      }
    });

    let maxKg = Math.max(...plus);
    let resultPlusIndex = plusIndex[plus.indexOf(maxKg)];
    if (plus.length > 0) {
      people.splice(0, 1);
      people.splice(resultPlusIndex - 1, resultPlusIndex);
      answer++;
    } else {
      people.splice(0, 1);
      answer++;
    }
  }

  return answer;
}

//  정답 코드를 봤더니
//  sort가 중요하고 재미있더라.
//  나는 문제를 보고 입력값을 어떻게 하면 잘 활용할지를 모르는 듯
function solution(people, limit) {
  let answer = 0;
  let sortArr = people.sort((a, b) => a - b);

  let left = 0;
  let right = sortArr.length - 1;

  while (left <= right) {
    if (sortArr[left] + sortArr[right] <= limit) {
      left++;
    }

    answer++;
    right--;
  }

  return answer;
}

//  복습코드2
//  ⭕

function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
      right--;
    } else {
      right--;
    }
  }

  answer = people.length - right - 1;

  return answer;
}
