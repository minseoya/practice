function solution(name, yearning, photo) {
    var answer = [];
    photo.forEach((pho)=>{
           let num =0
        for(let i=0;i<pho.length;i++){
            let j= name.indexOf(pho[i])
           if(j!=-1)
            {num+=yearning[j]}
        }
        answer.push(num)
    })
    return answer;
}