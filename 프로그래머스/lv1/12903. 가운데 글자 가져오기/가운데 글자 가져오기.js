function solution(s) {
    var answer = '';
    const arr = s.split('')
    const n=arr.length
    if(n % 2===0){
        answer = s[n/2-1]+s[n/2]
    }else{
        answer = arr[Math.floor(n/2)]
    }
    return answer;
}