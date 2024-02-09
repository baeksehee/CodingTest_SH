//  스킬트리
//  정확성: ⭕
//  시간: 40분

//  내 코드 1
//  typeof 검색해봄 ..
function solution(skill, skill_trees) {
  let sk = skill.split("");
  let minus = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    let check = new Array(skill.length).fill("hi");
    let skill_tree = skill_trees[i].split("");
    for (let j = 0; j < sk.length; j++) {
      skill_tree.map((e, i) => {
        if (sk.includes(e)) {
          let index = sk.indexOf(e);
          check[index] = i;
        }
      });

      // if(skill_trees.includes(sk[j])) {
      //     let skillIndex = skill_trees.indexOf(sk[j]);
      //     let checkIndex =  sk.indexOf(sk[j]);
      //     check[checkIndex] = skillIndex;
      // }
    }
    for (let i = 0; i < check.length; i++) {
      if (
        (typeof check[i] === typeof "hi" && typeof check[i + 1] === typeof 2) ||
        check[i] > check[i + 1]
      ) {
        minus++;
        break;
      }
    }
  }
  return skill_trees.length - minus;
}
