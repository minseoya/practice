function solution(n) {
 let i =0
 for(let j=0;j<=n;j++){
     if(n%j==0){
         i+=j
     }
 }
return i
}