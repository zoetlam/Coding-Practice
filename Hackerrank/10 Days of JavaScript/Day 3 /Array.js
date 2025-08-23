/* Given array. Return the seconde largest number in that array */

function getSecondLargest(nums) {
    let uniqueNums = [...new Set(nums)];
    uniqueNums.sort((a,b) => b-a);
    return uniqueNums[1];
    
}