function solution(n, m) {

    let max = 0
    let len = n>m?n:m
    for(let i=0;i<= len;i++){
        if(n%i==0 && m%i==0){
           max=i
        }
    }
    return [max,(m*n)/max];
}