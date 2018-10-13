function reverseString(str) {
  var arr = str.split("");
  var reverseString = "";
  for(var i = arr.length - 1; i >= 0; i--){
    reverseString += arr[i];
  } 
  return reverseString;
}