function solution(dots) {
    var answer = 0;
    let h=[]
    let w=[]
    dots.forEach(num=>{
        h.push(num[0])
        w.push(num[1])
    })
    let maxH=Math.max(...h)
    let maxW=Math.max(...w)
    let minH=Math.min(...h)
    let minW=Math.min(...w)

    answer = (maxH-minH)*(maxW-minW)
    return answer;
}