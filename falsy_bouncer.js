function bouncer(arr) {
 var localArr = arr.slice();
 var endingArray = []; 
for(var i = 0; i < localArr.length; i++){
  if(localArr[i]){
    endingArray.push(localArr[i]);
  }
}
return endingArray;
}