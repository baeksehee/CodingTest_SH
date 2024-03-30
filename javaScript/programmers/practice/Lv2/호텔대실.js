//  호텔 대실
//  정확성: 세모 (반례 테스트 케이스 하나 봄 .. 부등호 = 하나 붙여줘서 성공)
//  시간: 40분

//  내 코드1
function solution(book_time) {
  let answer = 0;

  if (book_time.length === 1) return 1;
  for (let i = 0; i < book_time.length; i++) {
    book_time[i][0] = Number(book_time[i][0].split(":").join(""));
    book_time[i][1] = Number(book_time[i][1].split(":").join("")) + 10;
    let outTime = book_time[i][1].toString().split("");
    let outTimeM = Number(outTime.slice(outTime.length - 2).join(""));
    if (outTimeM >= 60) book_time[i][1] = book_time[i][1] + 40;
  }

  book_time.sort((a, b) => a[0] - b[0]);

  let rooms = [book_time.shift()[1]];

  while (book_time.length > 0) {
    rooms.sort((a, b) => a - b);

    let [inin, out] = book_time.shift();
    if (rooms[0] <= inin) rooms.shift();
    rooms.push(out);

    answer = Math.max(answer, rooms.length);
  }

  return answer;
}
