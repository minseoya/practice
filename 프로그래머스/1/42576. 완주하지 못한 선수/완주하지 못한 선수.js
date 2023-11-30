function solution(participant, completion) {
    let doit = new Map()
    for(let person of participant){
        if(doit.has(person)){
            doit.set(person,doit.get(person)+1)
        }else{doit.set(person,1)}
    }

    for(let persons of completion){
        doit.set(persons,doit.get(persons)-1)

    }
  
    for(let [key,value] of doit){
        if(value==1)
            return key
    }

}