//  디스크 컨트롤러

function solution(jobs) {
  let answer = 0;
  let leng = jobs.length;
  let wait = [];
  let time = 0;
  jobs.sort((a, b) => a[0] - a[b]);

  while (wait.length > 0 || jobs.length > 0) {
    if (answer === 0) {
      let job = jobs.shift();
      answer += job[1] - job[0];
      time += job[1] + job[0];
    } else {
      if (jobs.length > 0 && time < jobs[0][0]) {
        time = jobs[0][0];
      }

      while (jobs.length > 0 && time >= jobs[0][0]) {
        wait.push(jobs.shift());
      }

      wait.sort((a, b) => a[1] - b[1]);

      while (wait.length < 0) {
        let job = wait.shift();
        answer += time - job[0] + job[1];
        time += job[1];
      }
    }
  }

  return answer / leng;
}

//  정답 보고 내가 고친 코드
//  이문제는 시간복잡도를 예상했을 때 높지 않아
//  굳이 heap 자료 구조를 사용하지 않아도 되는 듯
//  참고
//  hopedevelopment
//  메뉴
//  [JavaScript] 디스크 컨트롤러
//  2022. 8. 2. 22:15ㆍAlgorithm/프로그래머스

function solution(jobs) {
  let answer = 0;
  let leng = jobs.length;
  let wait = [];
  let time = 0;
  jobs.sort((a, b) => a[0] - a[b]); //b[0]이라고 해야할 것을 실수로 그렇게 함

  while (wait.length > 0 || jobs.length > 0) {
    if (jobs[0][0] > time) time = jobs[0][0]; // 이 코드 필요 없음
    while (jobs.length > 0 && time >= jobs[0][0]) {
      wait.push(jobs.shift());
    }
    wait.sort((a, b) => a[1] - b[1]);

    while (wait.length > 0) {
      // 아니 왜 while 문으로 하면 안 되는 거임
      let job = wait.shift();
      answer += time - job[0] + job[1];
      time = time + job[1];
    }
  }

  return answer / leng;
}

//  정답 코드

function solution(jobs) {
  let answer = 0;
  let leng = jobs.length;
  let wait = [];
  let time = 0;
  jobs.sort((a, b) => a[0] - b[0]);

  while (wait.length > 0 || jobs.length > 0) {
    while (jobs.length > 0 && time >= jobs[0][0]) {
      wait.push(jobs.shift());
    }
    wait.sort((a, b) => a[1] - b[1]);

    if (wait.length > 0) {
      let job = wait.shift();
      answer += time - job[0] + job[1];
      time = time + job[1];
    } else time = jobs[0][0];
  }

  return Math.floor(answer / leng);
}

//  다시 적어보기

function solution(jobs) {
  let leng = jobs.length;
  let answer = 0;
  let temp = [];
  let counter = 0;
  jobs.sort((a, b) => a[0] - b[0]);

  while (jobs.length > 0 || temp.length > 0) {
    while (jobs.length > 0 && counter >= jobs[0][0]) {
      temp.push(jobs.shift());
    }

    temp.sort((a, b) => a[1] - b[1]);

    if (temp.length > 0) {
      // 주의
      let job = temp.shift();
      answer += counter - job[0] + job[1];
      counter += job[1];
    } else counter = jobs[0][0];
  }

  return Math.floor(answer / leng);
}
