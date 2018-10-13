function findLongestWordLength(str) {
  var arr = str.split(" ");
  var currentlyLongest = arr[0];

  for (var i = 1 ; i < arr.length ; i++) {
      if( arr[i].length > currentlyLongest.length) currentlyLongest = arr[i];
  }
 
  return currentlyLongest.length;
}