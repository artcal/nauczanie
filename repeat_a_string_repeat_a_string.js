function repeatStringNumTimes(str, num) {
  var repeatedString = "";
  if(num > 0 ){
    for(var i = 0; i < num; i++){
      repeatedString += str; 
    }
  }
  return repeatedString; 
}