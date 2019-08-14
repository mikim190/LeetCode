function hashMap(queryType, query) {
   let currentValue = 0;
  
   let result =  queryType.reduce((hashTable, type, ind) => {
      if (type === 'insert') {
        hashTable[query[ind][0]] = query[ind][1]
      }

      if (type === 'addToValue') {
        for (let key in hashTable) {
          hashTable[key] = Number(hashTable[key]) + Number(query[ind][0]);
        }
      }

      if (type === 'addToKey') {
       let value = Object.values(hashTable);
       let newKey = Object.keys(hashTable).map(e => Number(e) + query[ind][0]);
       let deleteOldProps = Object.keys(hashTable).map(e => delete hashTable[e]);
        
       let memo = {};
       var ind = 0 ;
       while(ind < value.length) {
         memo[newKey[ind]] = value[ind];
         ind++
       }
       hashTable = memo; 
      }
      if (type === 'get') {
          currentValue += hashTable[query[ind][0]];

      }

    return hashTable;
    },{})
  return currentValue;    
}

let queryType = ["insert", "insert", "get", "addToValue", "addToKey", "get"];
let query = [[1, 2], [2, 3], [1] ,[2], [1], [3]];

hashMap(queryType, query) // 5.
