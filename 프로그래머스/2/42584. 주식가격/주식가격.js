function solution(prices) {
    var answer = [];
    for(let i = 0 ;i<prices.length;i++){
        let num=0
        for (let j=i+1;j<prices.length;j++){
            num+=1
            if(prices[i]>prices[j]){break} 
            
        }answer.push(num)
    }
    return answer;
}