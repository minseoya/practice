function solution(progresses, speeds) {
    let answer = [];
    let queue = [];

    // 작업이 완료되는데 필요한 일수를 큐에 저장
    for (let i = 0; i < progresses.length; i++) {
        let remainDays = Math.ceil((100 - progresses[i]) / speeds[i]);
        queue.push(remainDays);
    }

    while (queue.length > 0) {
        let deployDay = queue.shift(); // 가장 앞의 작업의 배포일
        let count = 1; // 현재 배포에서의 작업 수

        // 현재 작업보다 뒤에 있는 작업 중에서 배포 가능한 작업 수 계산
        while (queue.length > 0 && deployDay >= queue[0]) {
            queue.shift();
            count++;
        }

        answer.push(count); // 배포 가능한 작업 수 저장
    }

    return answer;
}

// Example
const progresses = [93, 30, 55];
const speeds = [1, 30, 5];
console.log(solution(progresses, speeds)); // Output: [2, 1]
