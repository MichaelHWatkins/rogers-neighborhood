//Business Logic

function beepBoop(value){
  let answerArray = [];
  for(let index = 0; index <= value; index++){
    if(index === 1){
      answerArray.push("Beep!");
    }
    else{
      answerArray.push(index);
    }
  }
  return answerArray;
}

//UI Logic