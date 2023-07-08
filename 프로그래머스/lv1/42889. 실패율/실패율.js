function solution(N, stages) {

    const fail = new Map()
  stages.sort((a,b)=>a-b)
    for(let i =1;i<=N;i++){
    let result = stages.filter(item => item ===i);
        fail.set(i,result.length/stages.length)
        for(let j=0;j<result.length;j++){
            stages.shift()
        }
    }
  
  let answer=[]
const sortedMap = new Map([...fail.entries()].sort((a, b) => b[1] - a[1]));

for (const [key, value] of sortedMap) {
  answer.push(key)
}
    
    return answer;
}