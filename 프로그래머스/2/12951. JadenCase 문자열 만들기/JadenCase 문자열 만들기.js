function solution(s) {
 let answer = s.split("").map((x,i)=>{
     if(typeof x =='string'&&i==0){
         return x.toUpperCase();
     }else if(s[i-1]==" "){
     return x.toUpperCase();
 }else{
     return x.toLowerCase()
    }
 }).join("")   

    return answer;
}