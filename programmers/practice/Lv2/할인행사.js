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
