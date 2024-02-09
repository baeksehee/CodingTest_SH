//  주차 요금 계산
//  정확성: ⭕
//  시간: 1시간 30분 . . .

//  내 코드1
//  주차 요금 계산
//  시간, 차량번호, in out 기록을 담아둔 각각의 배열 생성
function solution(fees, records) {
  const [dT, dF, pT, pF] = [...fees];
  let answer = [];
  let car = [];
  let time = [];
  let inOut = [];

  for (let i = 0; i < records.length; i++) {
    let [t, num, status] = [...records[i].split(" ")];
    t = t.split(":").map(Number);
    let changeT = t[0] * 60 + t[1];
    car.push(num);
    time.push(changeT);
    inOut.push(status);
  }

  let set = new Set(car);
  let numbering = Array.from(set);
  numbering.sort((a, b) => a - b);
  for (let i = 0; i < numbering.length; i++) answer.push(0);

  //  inOut에서 OUT일 때
  //  inOut일때의 index를 담음
  //  그 차량의 넘버들을 찾음
  //  해당 인덱스 전의 같은 차량 인덱스 IN을 찾음
  //  그 OUT인덱스 시간에서 - IN 인덱스 시간을 뺌 -> 해당 차량 numbering 인덱스 번호 result에 시간을 더해줌

  //  In , Out 세트
  for (let i = 0; i < inOut.length; i++) {
    if (inOut[i] === "OUT") {
      let carOutNumber = car[i];
      let carOutTime = time[i];
      let carInTime = 0;

      for (let j = 0; j < i; j++) {
        if (car[j] === car[i]) {
          carInTime = time[j];
          car[j] = -1;
          car[i] = -1;
          break;
        }
      }
      let answerCarNumber = numbering.indexOf(carOutNumber);
      answer[answerCarNumber] += carOutTime - carInTime;
    }
  }

  //  In ~ 11:59
  for (let i = 0; i < inOut.length; i++) {
    if (car[i] !== -1) {
      let index = car.indexOf(car[i]);
      let carInTime = time[index];
      let answerCarNumber = numbering.indexOf(car[i]);
      answer[answerCarNumber] += 23 * 60 + 59 - carInTime;
      car[i] = -1;
    }
  }

  for (let i = 0; i < answer.length; i++) {
    answer[i] = dF + Math.ceil((answer[i] - dT) / pT) * pF;
    if (answer[i] <= dF) answer[i] = dF;
  }

  // dF + Math.ceil((시간 - dT )/ pt ) * pF;

  return answer;
}
