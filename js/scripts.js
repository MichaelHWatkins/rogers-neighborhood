//Business Logic

function beepBoop(value){
  let answerArray = [];
  for(let index = 0; index <= value; index++){
    if(index === 1){
      answerArray.push("Beep!");
    }
    else if(index === 2){
      answerArray.push("Boop!");
    }
    else if(index === 3){
      answerArray.push("Won't you be my neighbor?")
    }
    else{
      answerArray.push(index);
    }
  }
  return answerArray;
}

//UI Logic