function solution(phone_number) {
    let star = '*'
    return star.repeat(phone_number.length-4)+phone_number.slice(-4)
}