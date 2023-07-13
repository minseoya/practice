function solution(s) {
    let counter = 0
    let zero = 0
    let result=0
    while(result!=1) {
         let arr =[]
       if(!counter){ 
         arr = s.split('')
       }else{
           arr=result.split('')
       }
        let count =0 
        arr.forEach((num)=>{
            if(num==0){
                count ++
                zero ++
            }
        })
        counter ++
        result = (arr.length - count).toString(2)
        
    }

    return [counter,zero];
}