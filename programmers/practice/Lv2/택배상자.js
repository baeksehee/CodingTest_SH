//  택배상자
//  정확성:❌
//  시간: 90분

//  문제 처음에 읽기가 어려웠음 순서가 헷갈려서
//  문제를 읽고 나니 문제는 쉬웠는데
//  시간초과로 실패

//  내 코드 1
function solution(order) {
  //  기존 컨테이너
  let answer = [1];
  //  보조 컨테이너
  let stack = [];
  let orders = [];

  for (let i = 0; i < order.length; i++) {
    orders.push(order.indexOf(i + 1) + 1);
  }

  orders = orders.filter((e) => e != 1);

  for (let i = 0; i <= orders.length; i++) {
    while (stack[stack.length - 1] === answer[answer.length - 1] + 1) {
      answer.push(stack.pop());
    }
    if (i < orders.length) {
      let box = orders[i];
      if (box === answer[answer.length - 1] + 1) answer.push(box);
      else stack.push(orders[i]);
    }
  }
  console.log(orders);
  console.log(answer);
  console.log(stack);
  return answer.length;
}

// 컨테이너 벨트에 있는 순서는 중요하지 않음
// 컨테이너 순서에 대로 있는데 박스의 숫자가 중요함
// 보조 컨테이너 벨트는 stack 자료구조임
// 보조 컨테이너 벨트를 이용해도 기사님이 원하는 순서대로 상자를 싣지 못한다면, 더 이상 상자를 싣지 않음

// 고객님의 물건을 땅에 둘 수 없으니 해당 차례가 아닌 박스는 무조건 보저 컨테이너로 가는군!

//  order 순서대로 그러니깐 1~5 순서대로 담아야 함
//  1 다음에 3이라면 중지
//  1 다음에 2라면 진행
//  기존 [1(3), 2(4) , 3(2), 4(1), 5(5)] 로 되어있음
//  order [4, 3, 1, 2, 5]
//  stack [3(2), 2(4) ,1(3)]
//  answer [4(1)]
//  4번째 상자는 1번째로 트럭에 실어야 함
//  3번째 상자는 2번째로 실어야 함
//  1번째 상자는 3번째로 실어야 함
//  2번째 상자는 4번째로 실어야 함
//  5번째 상자는 5번째로 실어야 함

//[프로그래머스] 택배상자 JS
//Hwang Won Tae·2023년 6월 22일
// velog
function solution(order) {
  let answer = 0;
  let stack = [];

  for (let i = 1; i <= order.length; i++) {
    //  박스 번호를 미리 담아둠
    stack.push(i);

    // order[해당 순번]과 박스 번호가 같다면 pop을 함
    while (stack.length !== 0 && stack[stack.length - 1] === order[answer]) {
      stack.pop();
      answer++;
    }
  }
  return answer;
}

//    [4,3,1,2,5]로 예를 들면
//    1) stack: [1] order[0] === 4
// 2) stack: [1, 2] order[0] === 4
// 3) stack: [1,2,3] order[0] === 4
// 4) stack: [1,2,3,4] order[0] === 4
// stack.pop() [1,2,3] order[1] = 3
// stack.pop() [1,2] order[2] = 1
// 5) stack: [1,2,3] order[2] = 1
// 끝
