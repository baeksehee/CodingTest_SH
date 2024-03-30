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

//  두 번째 내 코드
//  가로 길이와 세로 길의 max 값을 찾아 maxW, maxH
//  (1) maxW, maxH의 sizes[i]가 같을 때 -> maxW * maxH
//  (2) maxW, maxH의 sizes[i]가 다를 때
//  maxW, maxH 중 큰 값 sizes[i][0] 이나 sizes[i][1]으로 고정
//  작은 값이 maxW이면 나머지 [w, h]값들을 [h,w]로 바꿈(단, w가 h보다 작을 때)
//  작은 값이 maxH이면 나머지 [w, h]값들은 [w, h]로 바꿈 (단, h가 w보다 작을 때)

function solution(sizes) {
  let answer = 0;
  let ws = [];
  let hs = [];
  let wMax = 0;
  let hMax = 0;
  let wMaxIndex = 0;
  let hMaxIndex = 0;

  for (let i = 0; i < sizes.length; i++) {
    ws.push(sizes[i][0]);
    hs.push(sizes[i][1]);
  }
  wMax = Math.max(...ws);
  hMax = Math.max(...hs);
  wMaxIndex = ws.indexOf(wMax);
  hMaxIndex = hs.indexOf(hMax);

  if (wMaxIndex === hMaxIndex) {
    answer = wMax * hMax;
  } else {
    if (wMax > hMax) {
      let hs = [];
      let newHMax = 0;
      for (let i = 0; i < sizes.length; i++) {
        if (sizes[i][0] < sizes[i][1]) {
          hs.push(sizes[i][0]);
        } else {
          hs.push(sizes[i][1]);
        }
      }
      newHMax = Math.max(...hs);
      answer = wMax * newHMax;
    } else if (wMax < hMax) {
      let ws = [];
      let newWMax = 0;
      for (let i = 0; i < sizes.length; i++) {
        if (sizes[i][1] < sizes[i][0]) {
          ws.push(sizes[i][1]);
        } else {
          ws.push(sizes[i][0]);
        }
      }
      newWMax = Math.max(...ws);
      answer = newWMax * hMax;
    }
  }

  return answer;
}

//  블로그 다른 사람의 코드
//  velog-coderH
//  [프로그래머스] 최소직사각형 - JavaScript
/*
function solution(sizes) {
    let arr = sizes.map(size => size[0] > size[1] ? [size[0], size[1]] : [size[1], size[0]]);

    const width = [];
    const height = [];

    for (let i = 0; i < arr.length; i++) {
        width.push(arr[i][0]);
        height.push(arr[i][1]);
    }

    return Math.max(...width) * Math.max(...height);
}
*/
//  배열 접근과 배열 원소 수정 법을 배웠다.

//  문제 예제 입력값과 출력값 설명에서
//  "2번째의 명함[직사각형]을 돌리니
//  가로 -> 세로로 돌리니
//  지갑의 크기를 줄였다"
//  블로그 작성자는 그것을 보고
//  가로와 세로의 구분은 중요한 것이 아님을 알았다.
//  기준점을 각 원소의 긴 값을 가로로 짧은 값을 세로로 분류했다.
//  문제를 잘 읽고 생각해야 하는구나!
//  내 코드는 내가 봐도 복잡하고 이상했다.
//  생각의 전환이 알고리즘을 푸는데에 도움이 된다는 것을 알았다.
