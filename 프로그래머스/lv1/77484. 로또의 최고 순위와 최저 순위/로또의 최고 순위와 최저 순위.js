function solution(lottos, win_nums) {
    let match = {6:1,5:2,4:3,3:4,2:5,1:6,0:6};
    let zero=0;
    let counter=0;
    lottos.forEach(num=>{if(num == 0){zero++;}});

    win_nums.forEach(num=>{lottos.forEach(n=>{if(n==num){counter++;}})});

    return [match[zero+counter],match[counter]];
}