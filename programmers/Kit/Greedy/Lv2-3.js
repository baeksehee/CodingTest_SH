//  큰 수 만들기
//  정확성: ❌ (테스트 코드만 ⭕)
//  시간: 60분
//  틀린 이유: 그리디라고 다른 알고리즘을 생각 안 함
//  그냥 풀릴 줄 알았음 쉽게! ㅎ0ㅎ

//  내 코드 1
//  5시 42분
//  앞에 수일수록 큰 수인것이 중요함 <- 여기에 초점을 맞춰서 생각해보겠음 5시 50분
//  52분 10 분
//  6시 1분
//  제한조건 number 최대수가 너무 큼!!

function solution(number, k) {
  let answer = "";
  number = number.split("");

  let stand = Math.max(...number.slice(0, k));
  let minus = 0;
  for (let i = k - 1; i >= 0; i--) {
    if (number[i] < stand) {
      number.splice(i, 1);
      k--;
    }
  }

  while (k > 0) {
    // let set = new Set(...number);
    // if(set.size === 1) return number.splice(0, k).join("");

    for (let i = 0; i < number.length; i++) {
      if (number[i] < number[i + 1]) {
        // number.splice(i, i);
        // console.log(k);
        let newNumber =
          number.slice(0, i).join("") + number.slice(i + 1).join("");
        number = newNumber.split("");
        k--;
        break;
      }
    }
  }

  answer = number.join("");
  return answer;
}

//  내 코드2
//  stack 이라는 힌트를 얻고
//  테스트 케이스 두 개 실패

function solution(number, k) {
  let stack = [];

  while (k > 0) {
    if (stack.length === 0) {
      stack.push(number[0]);
      number = number.slice(1);
    } else if (stack.at(-1) >= number[0]) {
      stack.push(number[0]);
      number = number.slice(1);
    } else {
      stack.pop();
      k--;
    }
  }

  stack.push(...number);

  return stack.join("");
}

// 천유린 개발 블로그
//  https://taesung1993.tistory.com/46
//   참고 고친코드

function solution(number, k) {
  let stack = [];

  // while(k > 0) // k가 0이 되지 않는 케이스도 있어서 런타임 에러가 나는 듯요!
  // {
  //     if(stack.length === 0) {
  //         stack.push(number[0]);
  //         number = number.slice(1);
  //     } else if (stack.at(-1) >= number[0]) {
  //         stack.push(number[0]);
  //         number = number.slice(1);
  //     } else {
  //         stack.pop();
  //         k--;
  //     }
  // }

  // stack.push(...number);

  for (let i = 0; i < number.length; i++) {
    // if((stack.at(-1) < number[i]) && k > 0) {
    //     stack.pop();
    //     k--;
    // }
    while (stack.at(-1) < number[i] && k > 0) {
      stack.pop();
      k--;
    }
    //[4, 7] if로 했더니 이렇게 앞에 작은 수임에도 불구하고 4가 안 없어지는 거임 그런데 이유는 아직도 모르겠음
    // 입력 "4177252841"에서 ㅜㅜ
    stack.push(number[i]);
  }
  // stack에 들어온 수는 앞에 수와 같거나 보다 작거나니깐
  //  k가 남았을 시를 고려한 코드
  stack = stack.slice(0, stack.length - k);

  return stack.join("");
}
