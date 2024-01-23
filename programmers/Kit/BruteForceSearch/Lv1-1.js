//  최소직사각형
//  정확성: ❌

//  내가 주의해야 할 점
//  가장 길이가 긴 가로 w, 세로 h가
//  가로 ->  세로, 세로 -> 가로로
//  방향 바꾸기가 가능할 때 (다른 방향도 고려해서)

//  문제 푼지 20분 경과
//  문제 분석을 이제 해보자.

//  w, h 둘 상관없이 제일 큰 값이 기준점이 되어야겠어
//  제일 큰 w or h를 가진 size를 제외하고 반전을 시켜봄
//  만약 h or w의 최댓값보다 높아지는 수가 있으면 그것은 안 됨
//  그렇게 반전을 했을 때 h or w 값 중에 제일 큰 값 도출하면 됨

//  내 코드
//  코드 실행 버튼 후 세 가지 테스트만 성공
//  문제점: 입출력 예에만 의존함
//  모든 테스트 케이스를 통과할 수 없는 코드임

function solution(sizes) {
  let answer = 0;

  let ws = [];
  let wh = [];

  let maxW = 0;
  let maxH = 0;

  for (let i = 0; i < sizes.length; i++) {
    const [w, h] = sizes[i];
    ws.push(w);
    wh.push(h);
  }

  maxW = Math.max(...ws);
  maxH = Math.max(...wh);

  let maxWIndex = ws.indexOf(maxW);
  let maxHIndex = wh.indexOf(maxH);

  const standard = maxW > maxH ? maxWIndex : maxHIndex;

  // 기준점이 maxW일 때
  if (maxW > maxH ? true : false) {
    const fixMaxW = maxW;
    let fixMaxH = 0;
    let findMaxH = [];
    for (let i = 0; i < sizes.length; i++) {
      if (i != maxWIndex && sizes[i][0] <= sizes[i][1]) {
        findMaxH.push(sizes[i][0]);
      } else {
        findMaxH.push(sizes[i][1]);
      }

      fixMaxH = Math.max(...findMaxH);
    }
    answer = fixMaxW * fixMaxH;
  }

  //  기준점이 maxH일 때
  if (maxH > maxW ? true : false) {
    const fixMaxH = maxH;
    let fixMaxW = 0;
    let findMaxW = [];
    for (let i = 0; i < sizes.length; i++) {
      if (i != maxHIndex && sizes[i][1] <= sizes[i][0]) {
        findMaxW.push(sizes[i][1]);
      } else {
        findMaxW.push(sizes[i][0]);
      }

      fixMaxW = Math.max(...findMaxW);
    }
    answer = fixMaxW * fixMaxH;
  }

  return answer;
}
