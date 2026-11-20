function mutation(arr) {

  var firstElement = arr[0].toLowerCase().split("");
  var secondElement = arr[1].toLowerCase().split("");

  for(var i = 0; i<secondElement.length; i++){
    if(firstElement.indexOf(secondElement[i])< 0) return false;
  }
return true;
}