function solution(answers) {

  const student=new Map()
    const one = [1, 2, 3, 4, 5]

    const two = [2, 1, 2, 3, 2, 4, 2, 5]

    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    
    answers.forEach((an,i)=>{
      if(one[i%one.length]===an)student.has(1)?student.set(1,student.get(1)+1):student.set(1,1)
      if(two[i%two.length]===an)student.has(2)?student.set(2,student.get(2)+1):student.set(2,1)
  if(three[i%three.length]===an)student.has(3)?student.set(3,student.get(3)+1):student.set(3,1)
    })

 let answer =Math.max(...student.values())

const students = []
student.forEach((value, key) => {
  if (value === answer) {
    students.push(key);
  }
});
    return students.sort((a,b)=>a-b)
}