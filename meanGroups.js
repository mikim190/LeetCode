/*
You are given an array of arrays a. Your task is to group the arrays a[i] by their mean values, so that arrays with equal mean values are in the same group, 
and arrays with different mean values are in different groups.

Each group should contain a set of indices (i, j, etc), such that the corresponding arrays (a[i], a[j], etc) all have the same mean. 
Return the set of groups as an array of arrays, where the indices within each group are sorted in ascending order, and the groups are sorted in ascending order of their minimum element.

Input: a = [[3, 3, 4, 2],
     [4, 4],
     [4, 0, 3, 3],
     [2, 3],
     [3, 3, 3]]

mean  a[0] = (3+3+4+2)/4 = 3;
      a[1] = (4+4)/2 = 4;
      a[2] = (4+0+3+3)/4 = 2.5;
      a[3] = (2+3)/2 = 3;
      a[4] = (3+3+3)/3 = 3;
 
We have 3 groups of mean : 2.5 , 3, 4

Output: [[ 0, 4 ], [ 1 ], [ 2, 3 ]] 

** Note:
- The groups are sorted in ascending order of their minimum elements
- The indices within each group are sorted in ascending order

*/

function meanGroups(a) {
    
    let memo ={};
    
    for (let i = 0; i < a.length; i++) {
        let curr = a[i];
        
        let avg = (curr.reduce((sum, val) => {
            return sum += val;
        },0) /curr.length).toFixed(1);
        
        if (!memo[avg]) {
            memo[avg] = [i];
        } else {
            memo[avg].push(i);
        }
    } 
    return Object.values(memo);
}

