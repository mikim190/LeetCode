/*
I: an array of integers A;
  create a new array B with value as :
  B = [A[i], A[i-1], A[1], A[i - 2],...]
  if values of B are sorted in ascending order -> true;
  if not -> return false;
O: a boolean base on above condition
C: none
E: none  
*/

var alternatingSort = function (arr) {
  var result = true;
  var sortedArr = [];

  let start = 0;
  let end = arr.length - 1;

  while(sortedArr.length < arr.length) {
    sortedArr.push(arr[start]);

    if (arr[start] > arr[end] || sortedArr[start] > arr[start]) {
      return false;
    }
    if (start !== end) {
      sortedArr.push(arr[end])
    }
    start++;
    end--;
  }
  return result;
}

alternatingSort([1,3,5,6,4,2); //[1,2,3,4,5,6] -> return true
alternatingSort([1,3,5,6,4,9); //[1,9,3,4,5,6] -> return false;
