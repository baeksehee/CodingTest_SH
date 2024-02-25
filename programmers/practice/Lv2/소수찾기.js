//  소수 찾기
//  정확성: ❌`
//  시간: 40분

//  내 코드 1
function solution(numbers) {
  let answer = 0;
  // numbers에 모든 수를 쪼개는게 좋겠다?
  let arr = numbers.split("");
  let result = [];
  let number = "";

  function dfs(array) {
    let leng = array.length;

    if (array.length === 0) result.push(number);

    let index = Math.floor(Math.random() * 10);

    if (index >= 0 && index < leng) {
      number += `${array[index]}`;
      array.splice(index, 1);
    } else {
      let x = 0;
      while (!(index >= 0 && index < leng)) {
        x = Math.floor(Math.random() * 10);
      }
      array.splice(x, 1);
    }
    dfs(array);
  }

  dfs(arr);

  //  만약에 종이조각 수가 구해졌을 때 가정

  //  원소의 0 자릿 부분을 삭제
  //     result.map((e,i) => {
  //         for(let i = 0 ; i < e.length; i++) {
  //             if(e[i] === "0") result[i].split("").splice(i, 1);
  //             else break;
  //         }
  //     })

  //     let set = new Set(result);
  //     result = Array.from(set);

  //     result.map((e) => {
  //         for(let i = 2; i <e.length; i++) {
  //             if(e % i === 0) {
  //                 result.splice(i, 1);
  //                 break;
  //             }
  //         }
  //     })

  //     answer =result.length;

  return answer;
}

//  내 코드 2
//  완전 탐색 유형이라 모든 경우를 구해보고 싶은데 코드가 말을 안 듣는 상황

function solution(numbers) {
  let answer = 0;
  let visited = new Array(numbers.length).fill(false);
  let arr = new Set();

  function make(num, leng, visited) {
    leng--;
    if ((num === "1" && leng === 0) || (num === "0" && leng === 9)) return;
    if (leng === 0) {
      num = Number(num);
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return;
      }
      arr.add(num);
      return;
    }

    for (let i = 0; i <= numbers.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        make("" + numbers[i], leng + 1, visited);
        visited[i] = false;
      }
    }
  }

  for (let i = 1; i <= numbers.length; i++) {
    make("", i, visited);
  }

  return answer;
}

//  내 코드 3
//  1시 41분

function solution(numbers) {
  let answer = 0;
  let nums = new Set();
  let leng = numbers.length;
  let Array = new Array(leng).fill(false);

  function make(num, index, nowLeng, goalLeng, visited) {
    let Nnum = num + numbers[index];
    visited[index] = true;
    nowLeng++;

    if (nowLeng === goalLeng) {
      Nnum = Number(Nnum);
      if (Nnum === 0 || Nnum === 1) return;
      for (let i = 2; i <= Math.sqrt(Nnum); i++) {
        if (Nnum % i === 0) return;
      }
      nums.add(Nnum);
    }

    for (let i = 0; i < leng; i++) {
      if (!visited[i]) {
        make(Nnum.toString(), i, nowLeng, goalLeng, visited);
      }
    }
  }

  for (let i = 0; i < leng; i++) {
    for (let j = 1; j < leng + 1; j++) {
      make("", `${i}`, 0, j, visited);
    }
  }

  console.log(nums);

  return answer;
}

//  gpt 가 수정해준 코드

function solution(numbers) {
  let primeCount = 0;
  let numSet = new Set();
  const length = numbers.length;

  function findPrimes(currentNum, index, currentLength, goalLength, visited) {
    let newNum = currentNum + numbers[index];
    visited[index] = true;
    currentLength++;

    if (currentLength === goalLength) {
      newNum = Number(newNum);
      if (newNum === 0 || newNum === 1) return;
      for (let i = 2; i <= Math.sqrt(newNum); i++) {
        if (newNum % i === 0) return;
      }
      numSet.add(newNum);
    }

    for (let i = 0; i < length; i++) {
      if (!visited[i]) {
        findPrimes(newNum, i, currentLength, goalLength, [...visited]);
      }
    }
  }

  for (let i = 0; i < length; i++) {
    for (let j = 1; j < length + 1; j++) {
      findPrimes("", i, 0, j, new Array(length).fill(false));
      //  여기 방문을 했던 적이 있는 지 알기위해서
      //  false 로 초기화한 배열을 넣어줬다
      //  이걸 let visited = new Array(length).fill(false);
      //  라고 밖에서 선언한 후 매개변수로 넣으면
      //  그 배열이 공유가 되어서 ... 문제가 발생했던 거였다.
    }
  }

  primeCount = numSet.size;

  return primeCount;
}

//  위의 gpt 코드 보고 고친 코드
function solution(numbers) {
  let answer = 0;
  let nums = new Set();
  let leng = numbers.length;
  // let array = new Array(leng).fill(false);

  function make(num, index, nowLeng, goalLeng, visited) {
    let Nnum = num + numbers[index];
    visited[index] = true;
    nowLeng++;

    if (nowLeng === goalLeng) {
      Nnum = Number(Nnum);
      if (Nnum === 0 || Nnum === 1) return;
      for (let i = 2; i <= Math.sqrt(Nnum); i++) {
        if (Nnum % i === 0) return;
      }
      nums.add(Nnum);
    }

    for (let i = 0; i < leng; i++) {
      if (!visited[i]) {
        make(Nnum, i, nowLeng, goalLeng, [...visited]);
      }
    }
  }

  for (let i = 0; i < leng; i++) {
    for (let j = 1; j < leng + 1; j++) {
      make("", i, 0, j, new Array(leng).fill(false));
    }
  }

  answer = nums.size;

  return answer;
}

//  Javascript | Level2. 소수 찾기
//  임하스·2021년 11월 2일 - velog 참고

function solution(numbers) {
  let nums = new Set();

  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  function dfs(set, arr, fixed) {
    if (arr.length >= 1) {
      for (let i = 0; i < arr.length; i++) {
        let newFixed = fixed + arr[i];
        let copyArr = [...arr];
        copyArr.splice(i, 1);

        if (isPrime(Number(newFixed))) set.add(Number(newFixed));

        dfs(nums, copyArr, newFixed);
      }
    }
  }

  dfs(nums, numbers.split(""), "");

  return nums.size;
}
