/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0. //If we merge and sort 2 arrays [1,2,3] => this array has odd length => median is the middle value
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5. //Merge and Sort [1,2,3,4] => length is even => median is (2+3)/2 = 2.5
*/


var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
       return findMedianSortedArrays(nums2, nums1);
    }
    let length1 = nums1.length;
    let length2 = nums2.length;

    let start = 0;
    let end = length1;

    while (start <= end) {
        let mid1 = Math.floor((start + end) /2); 
        let mid2 = Math.floor((length1 + length2 + 1) / 2 - mid1); 
        
        let maxLeft1 = mid1 === 0 ? -Number.MAX_VALUE : nums1[mid1 - 1]; 
        let minRight1 = mid1 === length1 ? Number.MAX_VALUE : nums1[mid1];
        
        let maxLeft2 = mid2 === 0 ? Number.MIN_VALUE : nums2[mid2 - 1];
        let minRight2 = mid2 === length2 ? Number.MAX_VALUE : nums2[mid2];
        
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if ((length1 + length2) % 2 === 0) {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            } else {
               return Math.max(maxLeft1, maxLeft2)
            }
        } else if (maxLeft1 > minRight2) {
            end = mid1 - 1;
        } else {
            start = mid1 + 1;
        }
       
    }

};