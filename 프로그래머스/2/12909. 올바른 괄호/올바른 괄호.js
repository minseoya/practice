function solution(s) {
    let arr = [];
    let sArr = s.split("");

    for (let i = 0; i < sArr.length; i++) {
        let num = arr.length;

        if (num > 0 && arr[num - 1] === "(" && sArr[i] === ")") {
            arr.pop();
        } else {
            arr.push(sArr[i]);
        }
    }

    return arr.length === 0;
}
