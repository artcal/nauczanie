function frankenSplice(arr1, arr2, n) {
 // inaczej niż w wymagają w zadaniu, ale też działa :
 // return arr2.slice(0, n).concat(arr1).concat(arr2.slice(n));
 var localArray = arr2.slice();
 for(var i = 0 ; i < arr1.length; i++){
   localArray.splice(n,0, arr1[i]);
   n++;
 }
 return localArray;
}