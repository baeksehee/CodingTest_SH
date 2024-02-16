//  다리를 지나는 트럭
//  정확성: ❌
//  시간: 70분

//  내 코드1
function solution(bridge_length, weight, truck_weights) {
  let answer = 1;
  //  도로 위에 있는 차를 담아두는 stack
  let stack = [];
  let i = 0;
  //  weigth가 max weight 보다 안 나가서 같이 도로를 갈 경우 time 은 1증가
  //  아닌 경우 time은 도로 길이 만큼 증가
  while (truck_weights.length > i) {
    let road = 0;
    let start = i;

    while (road + truck_weights[i] <= weight) {
      road += truck_weights[i];
      stack.push(truck_weights[i]);
      i++;
    }

    if (stack.length === 1) {
      answer += bridge_length;
    } else if (stack.length > 1) {
      if (start === 0) {
        answer = stack.length * answer + bridge_length;
      } else if (start !== 0) {
        answer += stack.length + 1;
      }
    }
    stack = [];
  }

  return answer;
}

// 나를 위한 것만은 아닌 기록
// 프로그래머스 코딩테스트 연습 Level 2 - 다리를 지나는 트럭 (JavaScript)
// 김씩씩 - tistory
// 전형적인 큐구조임
//  헐!!
function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let curWeight = 0;
  let time = 0;
  let bridge = new Array(bridge_length).fill(0);

  while (truck_weights.length > 0) {
    time++;
    curWeight -= bridge.shift();

    if (truck_weights[0] + curWeight > weight) {
      bridge.push(0);
    } else {
      let push = truck_weights.shift();
      curWeight += push;
      bridge.push(push);
    }
  }

  answer = time + bridge_length;

  return answer;
}
