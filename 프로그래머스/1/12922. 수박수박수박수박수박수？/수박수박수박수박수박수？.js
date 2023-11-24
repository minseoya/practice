function solution(n) {
    var answer = '';
    const word = "수박"
    for(let i=1;i<=n/2;i++){
    answer+=word
    }
    if(n%2==1){
        answer+=word[0]
    }
    
    return answer
}