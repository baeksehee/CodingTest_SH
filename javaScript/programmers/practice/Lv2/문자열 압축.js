// 문자열 압축

// 내 코드 1
// 결과: ❌
// 시간: 41분분

//1. 문자열은 제일 앞부터 정해진 길이만큼 잘라야 합니다.
// 2. 문자열을 자를 때 나누는 수가 꼭 문자열의 길이에 맞아 떨어질 필요 없음
// ex. 문자열 길이 8 문자를 나누는 길이 3
// 3. 대신에 나누는 문자열의 길이가 총 문자열 길이의 반 이상을 넘어가는 순간 효과 없음
// ex. 문자열을 압축하는 길이는 최대 Math.floor(s.length) 이하여야 한다. 반 내림 검색
// 4. 순서가 연속되어야 압축이 됨 그래서 전체 중에서 같은 문자열을 찾을 필요는 없은
// 순차대로 확인하면 됨

function solution(s) {
  let answer = s.length;

  const maxAnswer = Math.floor(answer);

  for (let i = 1; i <= maxAnswer; i++) {
    let zip = []; // 이 변수 이름은 인터넷 검색하면서 고민함

    for (let j = 0; j < s.length; j += i) {
      // 이 부분 증가식 ai 도움으로 수정함

      if (zip.length == 0) {
        zip.push(1);
        s.slice(j, j + 1);
      } else if (s.length - j < 0) {
        zip.push(s.slice(j, s.length + 1));
      } else if (zip.at(-1) == s.slice(j, j + 1)) {
        zip[zip.length - 1] = zip[zip.length - 1] + 1;
      } else if (zip.at(-1) !== s.slice(j, j + 1)) {
        zip.push(1);
        s.slice(j, j + 1);
      }

      let testZip = zip.join(",").replaceAll(1, "");

      if (answer > testZip) answer = testZip;
    }

    return answer.length;
  }
}

// gpt 코드
// 압축 수 count 로 빼기
// 문자열 자른 거 변수로 빼기
// 현재 문자열과 이전 문자열을 비교하는 변수 및 코드 사용하기

// 전의 코드 매우 이상했던 점
// return 문 위치도 이상해서 for 문이 한 번 돌고 끝이었다.
// zip.filter(v => v !== 1).join(""); 로 해야 내가 생각했던 join이 된다.

// 기존 아이디어는 맞았지만,
// 변수 파악 및 구현은 0점구현이 많이 서툴렀던 점을 수정했다.
function solution(s) {
  let answer = s.length;

  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    let zip = []; // 압축된 결과 저장
    let count = 1;
    let prev = s.slice(0, i);

    for (let j = i; j < s.length; j += i) {
      // 증가식 고침
      const current = s.slice(j, j + i);
      if (current === prev) {
        count++;
      } else {
        zip.push((count > 1 ? count : "") + prev);
        prev = current;
        count = 1;
      }
    }

    zip.push((count > 1 ? count : "") + prev); // 마지막 처리

    const compressed = zip.join("");
    if (compressed.length < answer) {
      answer = compressed.length;
    }
  }

  return answer;
}
