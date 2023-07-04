function solution(d, budget) {
    var answer = 0;
    let counter=0
    d.sort((a,b)=>a-b)
    
    d.forEach((num)=>{ 
    answer+=num
      if(answer>budget){return counter}
      else if(answer==budget){return ++counter}
      counter++
    })
    return counter;
}