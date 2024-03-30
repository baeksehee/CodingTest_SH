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

//  참고
//  프로그래머스 - 다른 사람의 풀이
//  time 구하는 식이랑
//  object를 for of 문처럼 하나씩 돌리는for (let 변수 of Object.entries(object))가 신기했음
function solution(fees, records) {
  let answer = [];

  let partTimeCars = {};

  records.forEach((record) => {
    let [time, id, status] = record.split(" ");
    time = Number(time.split(":")[0] * 60) + Number(time.split(":")[1]);
    if (!partTimeCars[id]) partTimeCars[id] = 0;
    //  이 식을 생각하는 것이 천재야
    if (status === "IN") partTimeCars[id] += 1439 - time;
    if (status === "OUT") partTimeCars[id] -= 1439 - time;
  });

  //     console.log(partTimeCars);

  for (let [car, time] of Object.entries(partTimeCars)) {
    // fees[0] : 기본시간, fees[1]: 기본 요금, fees[2]: 단위 시간, fees[3]: 단위 요금
    //  기본요금 + Math.ceil((사용시간 - 기본시간)/단위 시간)*단위요금
    if (time <= fees[0]) time = fees[1];
    else {
      time = fees[1] + Math.ceil((time - fees[0]) / fees[2]) * fees[3];
    }
    answer.push([car, time]);
  }

  // console.log(answer);

  return answer.sort((a, b) => a[0] - b[0]).map((t) => t[1]); // map 활용
}

// 다른 사람의 풀이 설명 가지고 옴
// 차량번호 오름차순으로 청구요금 담아 배열로 리턴

// 청구요금 구하기
// 기본요금 fee[1] + ( 주차시간 - 기본시간fee[0] ) / fee[2] * fee[3]

// 기본시간이내 : 기본요금
// 출차 시간 max = 23:59
// 분 단위는 올림

// 주차시간 구하기
// records.forEach(r => r.split(' ')

// log 객체에 {차번호: 시간} 저장
// IN 이면 + (24시간(분) - 입차시간)
// OUT이면 -(1430 - 출차시간)
// 24시간 = 1440분

// ex) 05:34 (05 * 60) + 34 = 334
