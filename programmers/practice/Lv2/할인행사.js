//  할인 행사
//  정확성: ❌
//  시간: 40분

//  내 코드 1

function solution(want, number, discount) {
  let answer = 0;
  let wantDay = 0;

  while (wantDay + 10 < discount.length) {
    let wantNumber = number;
    let tenDay = discount.slice(wantDay, wantDay + 10);

    tenDay.map((e) => {
      if (want.includes(e)) {
        let numberIndex = want.indexOf(e);
        if (wantNumber[numberIndex] > 0) wantNumber[numberIndex] -= 1;
      }
    });

    let num = wantNumber.filter((e) => e != 0).length;

    if (num === 0) answer += 1;

    wantDay++;
  }

  return answer;
}

//  velog-[프로그래머스 JavaScript] 할인 행사
//  DO YEON KIM 참고
function solution(want, number, discount) {
  let answer = 0;

  for (let i = 0; i <= discount.length - 10; i++) {
    let count = 0;

    let targetDays = discount.slice(i, i + 10);

    //  10일을 want 배열 원소와 비교 want 배열 요소 중 [j]인덱스와 같으면 filter로 넣어둠
    //  number[j]와 같으면 conut++
    //  통과된 want 원소 수로 판단
    for (let j = 0; j < want.length; j++) {
      if (targetDays.filter((e) => e === want[j]).length === number[j]) {
        count++;
      }
    }

    if (want.length === count) {
      answer++;
    }
  }

  return answer;
}

//  복습 코드 ⭕
//  20분

function solution(want, number, discount) {
  let answer = 0;

  // number의 모든 원소가 o이 되는 날 answer ++
  // if(discount.length < 10) return 0;

  for (let i = 0; i <= discount.length - 10; i++) {
    let numberArr = [...number];

    let target = discount.slice(i, i + 10);
    // console.log(target);

    // number 수를 -1 하는 방식
    // number 모든 원소가 0이 되면 answer++;
    target.map((e) => {
      if (want.includes(e)) {
        let ei = want.indexOf(e);
        numberArr[ei] = numberArr[ei] - 1;
      }
    });
    // console.log(numberArr);
    if (numberArr.filter((e) => e != 0).length === 0) answer++;
  }

  return answer;
}
