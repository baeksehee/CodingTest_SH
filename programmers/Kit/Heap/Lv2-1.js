//  더 맵게

function solution(scoville, K) {
  let answer = 0;
  let sc = [...scoville].sort((a, b) => a - b);
  let mixSc = function (a, b) {
    return a + b * 2;
  };
  let mixCount = 0;

  let mixResult = function () {
    if (K > mixSc(sc[0], sc[1])) {
      sc.splice(0, 1);
      sc.splice(1, 1);
      mixCount++;
      sc.sort();
      if (sc.length === 0) {
        answer = -1;
      } else {
        mixResult();
      }
    } else {
      answer = ++mixCount;
      sc.splice(0, mixSc(sc[0], sc[1]));
    }
  };
  mixResult();
  return answer;
}

//  다시 풀어본 코드
//  정확성:❌
//  효율성:❌
function solution(scoville, K) {
  let answer = 0;

  while (scoville.length > 1) {
    if (scoville.length === 1 && scoville[0] < K) {
      answer = -1;
      break;
    }
    if (Math.min(...scoville) >= K) break;
    scoville.sort((a, b) => a - b);
    scoville.push(scoville[0] + scoville[1] * 2);
    scoville.splice(0, 2);
    answer++;
  }
  return answer;
}
