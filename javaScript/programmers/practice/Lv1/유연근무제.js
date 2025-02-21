//  유연근무제제
//  정확성: ⭕
//  시간은 측정 안 하고, 풀어봄, 풀이법도 생각 안 하고 풀음

function solution(schedules, timelogs, startday) {
  let answer = 0;
  let n = schedules.length;
  let successTime = schedules.map((a) => a + 10);

  for (let i = 0; i < n; i++) {
    if (successTime[i] % 100 >= 60) {
      successTime[i] = successTime[i] + 100 - 60;
    }
  }

  for (let i = 0; i < n; i++) {
    let start = startday;
    let flag = true;

    for (let j = 0; j < 7; j++) {
      if (start == 6) {
        start++;
      } else if (start == 7) {
        start = 1;
      } else {
        let newGap = timelogs[i][j] - successTime[i];
        if (newGap > 0) {
          console.log(newGap);
          console.log(i);
          console.log(timelogs[i][j]);
          flag = false;
          break;
        } else start++;
      }
    }

    if (flag === true) answer++;
  }

  return answer;
}

// 908 - 905  =3
