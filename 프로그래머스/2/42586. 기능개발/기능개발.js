
function solution(progresses, speeds) {
    let days = progresses.map((num,i)=>Math.ceil((100-num)/speeds[i]));
   
    let answer=[0];
    let maxDay=days[0];
      for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }
    return answer;
}