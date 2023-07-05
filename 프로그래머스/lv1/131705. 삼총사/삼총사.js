function solution(number) {
    let answer = 0;
    for(let i=0;i<number.length;i++){
        for(let j=i+1;j<number.length;j++){
            for(let t=j+1;t<number.length;t++){
                if(number[i]+number[j]+number[t]==0){
                    answer ++
                }
            }
        }
    }
    
    return answer;
}