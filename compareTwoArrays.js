function spellingBeeSolutions(wordlist, puzzles) {
 
  let result = [];
  let total = 0;
  
  for (let i = 0; i < puzzles.length; i++) {
    for (let j = 0; j < wordlist.length; j++) {
      if (checkWord(wordlist[j], puzzles[i]) > 0) { 
        total++
      }    
    }
    result.push(total)
    total = 0;
  }
  return result;   

}

function checkWord(word, puzz) {
 
  let key = puzz[0];
  if (!word.includes(key)) {
    return 0;
  }

  let count = 0;
  let hashPuzz = puzz.split('').reduce((memo, val) => {
    if (memo[val] === undefined) {
      memo[val] = 1;
    } else {
      memo[val]++;
    }
    return memo;
  }, {});

  for (let i = 0; i < word.length; i++) {
    let curr = word[i]
    if (hashPuzz[curr] !== undefined) {
      count++
    } else {
      return 0;
    }
  }
  
  return count

}

var wordlist= ['APPLE','PLEAS', 'PLEASE']

var puzzles= ['AELWXYZ', 'AELPXYZ','SPLEAYZ']


spellingBeeSolutions(wordlist,puzzles); //[0,1,2]
/*
- Each puzzle has a key which is its first element
- Each word needs to contain a key
Explain output:
- The first puzzle doesn't create any words in wordlist => 0
- The second puzzle only create 'APPLE' => 1 (doesn't contain 'S' to create other 2 words)
- The third puzzle can create 'PLEAS', 'PLEASE' => 2 (the word 'APPLE' doesn't contain the key 'S')
*/
