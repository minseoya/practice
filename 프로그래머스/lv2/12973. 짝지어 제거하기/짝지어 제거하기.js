function solution(s)
{
    let sArr = s.split("")
    let arr = []
    for(let i=0;i<sArr.length;i++){
        if(sArr[i]==arr[arr.length-1]){
            arr.pop()
        }else{
            arr.push(sArr[i])
        }
    }
    

    return arr.length ==0?1:0;
}