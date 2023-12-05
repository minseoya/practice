function solution(n) {
    let answer, a=0, b=1;
    for(let i=2 ; i<=n ; i++){
        answer = a+b % 1234567
        a=b
        b=answer
    }
    return answer%1234567;
}