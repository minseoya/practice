function solution(s) {
    var answer = '';
    let Arr=[]
    let arr1 = s.split(' ')
    arr1.forEach(word=>{
        Arr.push(word.split(''))
    })

    Arr.forEach((st,j)=>{
        st.forEach((str,i)=>{
            if(i%2==0){
            answer+= str.toUpperCase()
            }else{
            answer+=str.toLowerCase()
            }
        })
      if(j!=Arr.length-1){answer+=' '}
    })

    return answer;
}