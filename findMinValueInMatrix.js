/*
//I: n - number of row, m- number of column, queries - anumerical nested array
//O: an array of min values in matrix
//C: nonde
//E: none

Explain:
- Create a matrix with n x m length. Each value at matrix[r][c] = (r+1) x (c+1);
- queries:
[0]: find min value in matrix n x m
[1,2]: deactivate all values in row 2
[2,1]: deactivate all values in column 1
[1,1]: deactivate all values in row 1
*/

function findMinValueInMatrix (n,m,queries) {
  const {log}= console;
  let matrix = new Array(n);
  
  for (let i = 0; i < n; i++) {
    let eachRow = [];
    for (let j = 0; j < m; j++) {
      let sum = (i+1) * (j+1);
      eachRow.push(sum)
    }
    matrix[i] = eachRow;
  }
// log(matrix)
  let result = [];
  let minValue = matrix[0][0];
  let memo = {};

  for (let k = 0; k < queries.length; k++) {
    let query = queries[k];

    if (query.length === 1) {
      if (result.length === 0) {
        result.push(minValue)
        log('res1', result)
      }
      let r = 0;
      let c = 0;

      while (r < n && c < m) {
        if (matrix[r][c] && matrix[r][c] < minValue) {
          result.push(matrix[r][c]);
          minValue = matrix[r][c]
          log('1matrix')
          break;
        }
        if(matrix[r][c] === false) {
          log('2matrix')
          c++;
        }
        r++;


      }

      
   
    } 
    
    if (query.length > 1) {
      let key = query[0];
      let rowOrCol = query[1] - 1;

      if (key === 1) { //deactivate row
        let col = 0;
        while(col < m) {
          if (matrix[rowOrCol][0] <= minValue) {
            minValue = matrix[rowOrCol + 1] [0]
          } 
          matrix[rowOrCol][col] = false;
          
          col++;
        }
        
        log('1', matrix)
      }
      if (key === 2) { //deactivate col
        let row = 0;
        while(row < n) {
          if (matrix[rowOrCol][0] <= minValue) {
            minValue = matrix[rowOrCol][1]
          } 
          matrix[row][rowOrCol] = false;
          log('col')
          row++;
        }
       
       log('2', matrix) 
      }
    }
  }

  return result;
}

findMinValueInMatrix(3,4,[[0],[1,2],[0],[2,1],[0],[1,1],[0]])
//[1,1,2,6]

//matrix =
//[ [ 1, 2, 3, 4 ], 
//  [ 2, 4, 6, 8 ], 
//  [ 3, 6, 9, 12 ] 
//                  ]
