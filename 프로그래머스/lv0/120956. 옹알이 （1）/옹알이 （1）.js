function solution(babbling) {
    let answer =0
    const ex = ["aya","ye","woo","ma"]
    const regex = new RegExp(ex.join("|"), "gi");
    babbling.forEach((word)=>{
const replacedSentence = word.replace(regex, "");
        if(!replacedSentence.length) answer ++
    })
    return answer;
}