function largestOfFour(arr) {
  var arrWithLargestNumbers = [];
  for(var i = 0; i < arr.length; i++){
    var currentlyLargest = arr[i][0];
    for(var j = 1; j < arr[i].length; j++){
        if( arr[i][j] > currentlyLargest) currentlyLargest = arr[i][j];
    }
    arrWithLargestNumbers[i] = currentlyLargest;
  }
  return arrWithLargestNumbers;
}