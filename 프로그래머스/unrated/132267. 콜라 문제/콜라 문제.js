function solution(a, b, n) {
  let answer = 0
  
  while(n>=a){
    let fun = Math.floor(n/a) * b
    n = n%a + fun
    answer += fun
  }
    return answer;
}
