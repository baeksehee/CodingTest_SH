//  오픈채팅방
//  정확성: ⭕
//  시간: 20분
//  단순 구현 코드 -> 훨씬 좋은 정답 코드가 많음

//  내 코드1
//  12:06
//  record -> r = ["status", "id", "name"];
//  r -> 2 -> Leave
//  r -> 3 -> status[0] = Enter or status[0] = Change
function solution(record) {
  let answer = [];
  //  userId : name;
  let names = {};

  for (let r of record) {
    let detail = r.split(" ");
    //  detail[0] : status, detail[1] : userId, detail[2]:name
    if (detail[0] === "Enter" && names[detail[1]] === detail[0]) continue;
    if (detail[0] === "Leave") continue;
    if (detail[0] === "Enter" && names[detail[1]] !== detail[0]) {
      names[detail[1]] = detail[2];
      continue;
    }
    if (detail[0] === "Enter" && names[detail[1]] === undefined) {
      names[detail[1]] = detail[2];
      continue;
    }
    if (detail[0] === "Change") {
      names[detail[1]] = detail[2];
      continue;
    }
  }

  for (let r of record) {
    let detail = r.split(" ");
    //  detail[0] : status, detail[1] : userId, detail[2]:name
    if (detail[0] === "Enter") {
      answer.push(`${names[detail[1]]}님이 들어왔습니다.`);
      continue;
    }
    if (detail[0] === "Leave") {
      answer.push(`${names[detail[1]]}님이 나갔습니다.`);
      continue;
    }
    if (detail[0] === "Change") continue;
  }

  return answer;
}
