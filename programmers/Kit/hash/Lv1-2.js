//  포켓몬
//  정확성: ⭕
//  문제 푼 시간: 1시간 (집중력은 조금 🔽)

//  문제 풀기 전 요약
//  포켓몬 몇 개 -> n/2
//  point! 최대 다른 종류의 포켓몬을 고르기 -> return 값
//  map으로 한 번 시도해보겠삼

//  문제점: Map에 아직 익수하지 않아 몇 가지 앞에서 Map 정리한 것을 조금 참고함
//  겹치는 결과의 조건문을 하나로 통일할 수 있는데 안 함 문제점인가?

function solution(nums) {
  let answer = 0;
  const getNums = nums.length / 2;
  //  map()이라고 해서 Map()만 참고함
  const Pokemons = new Map();

  for (let i = 0; i < nums.length; i++) {
    let a = nums[i];
    // 괄호 하나 안 넣어서 생긴 오류 참고함..
    Pokemons.set(a, (Pokemons.get(a) || 0) + 1);
  }

  let getPokemonNumberOfType = 0;
  // size()라고 했는데 size라는 것을 참고함
  if (getNums == Pokemons.size) {
    getPokemonNumberOfType = getNums;
    answer = getPokemonNumberOfType;
  }

  if (getNums < Pokemons.size) {
    getPokemonNumberOfType = getNums;
    answer = getPokemonNumberOfType;
  }

  if (getNums > Pokemons.size) {
    getPokemonNumberOfType = Pokemons.size;
    answer = getPokemonNumberOfType;
  }

  return answer;
}

// 프로그래머스 - 다른 사람의 풀이

function solution(nums) {
  const max = nums.length / 2;
  //    nums 즉, 포켓몬들의 종류 수를 한 번에 알 수 있게 해줌
  //    Set 객체는 중복되지 않는 유일한 값들의 집합임을 생각해낸게 대단!
  const arr = [...new Set(nums)];
  //    내 코드의 if 문들을 삼항 연산자로 간결해진 코드
  return arr.length > max ? max : arr.length;
}

//  초기 코드
//  허술한 점이 많음

function solution(nums) {
  let answer = 0;
  const getNums = nums / 2;
  //  map()이라고 해서 Map()만 참고함
  const Pokemons = new Map();

  for (let i = 0; i < nums.length; i++) {
    let a = nums[i];
    // 괄호 하나 안 넣어서 생긴 오류 참고함..
    Pokemons.set(a, (Pokemons.get(a) || 0) + 1);
  }

  //   for문만 참고함. .
  for (let [k, v] of Pokemons) {
    let getPokemonNumberOfType = 0;

    // size()라고 했는데 size라는 걸 참고함
    if (getNums == Pokemons.size) {
      if (v > 0) {
        getPokemonNumberOfType += 1;
      }
      answer = getPokemonNumberOfType;
    }

    if (getNums < Pokemons.size) {
      getPokemonNumberOfType = Nums;
      answer = getPokemonNumberOfType;
    }

    if (getNums > Pokemons.size) {
      getPokemonNumberOfType = Pokemons.size();
      answer = getPokemonNumberOfType;
    }
  }

  return answer;
}
