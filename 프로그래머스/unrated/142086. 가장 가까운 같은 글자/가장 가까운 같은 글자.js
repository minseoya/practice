function solution(s) {
    var answer = [];
    let arr =[]
    const sArr = s.split('')
    sArr.forEach((st,i)=>{
        let num = arr.lastIndexOf(st)
        console.log(st,num)
        if(num===-1){
            answer.push(-1)
        }else{  
            answer.push(i-num)
        }
        arr.push(st)
    })
    return answer;
}