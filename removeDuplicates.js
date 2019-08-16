var removeDuplicates = function(nums) {
 
   let lastIndex = 0;
   nums.map(n => {
        if(nums[lastIndex] != n){
            lastIndex++;
            nums[lastIndex] = n;         
        }
        
     });
    
    return lastIndex +1;
};

removeDuplicates([1,2,3,3,4,4,6]) //5 as [1,2,3,4,6]
