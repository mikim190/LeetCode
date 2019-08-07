//I: an integer n, an array of numbers a
    // n: length of array
    //a: unsorted array with positive/negative numbers
//O: an array with new values:
    // new value = a[i-1] + a[i] + a[i+1] (with i = index)
//C: always has 1 solution (n>=1 & a.length = n)
//E: if n === 1 => return a

function mutateTheArray(n, a) {
    if (n === 1) {
        return a;
    }
    var result = new Array(n);
 
    for (let i = 0; i < n; i++) {
        let left = a[i-1] ? a[i-1] : 0;
        let curr = a[i]
        let right = a[i+1] ? a[i+1] : 0;
  
        result[i] = (left+curr+right)
    } 
    return result; 
 
}

// mutateTheArray(5, [4, 0, 1, -2, 3])
// => [4, 5, -1, 2, 1]