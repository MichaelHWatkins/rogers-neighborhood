//Business Logic

function beepBoop(value, name){
  if(!Number.isInteger(value) || value < 0){
    return "Error please input a positive integer!"
  }
  else{
    let answerArray = [];
    for(let index = 0; index <= value; index++){
      let indexArray = index.toString().split("").sort().reverse() 
      for(let i = 0; i < indexArray.length; i++){
        if(indexArray.includes("3")){
          answerArray.push("Won't you be my neighbor, " + name + "?");
          break;
        }
        else if(indexArray.includes("2")){
          answerArray.push("Boop!");
          break;
        }
        else if(indexArray.includes("1")){
          answerArray.push("Beep!")
          break;
        }
        else{
          answerArray.push(index);
          break;
        }
      }
    }
    return answerArray;
  }
  
}

//UI Logic

$(document).ready(function() {

  $("form#numberInput").submit(function(event) {
    event.preventDefault();
    const result = parseInt($("#input").val());
    const name = $("#inputName").val();
    $("#output").text(beepBoop(result, name));
  })
})