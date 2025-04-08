function radixSort(nums) {
    if (nums.length === 0) return nums;
    
    // Find the maximum number to know the number of digits
    const maxNum = Math.max(...nums);
    
    // Loop through each digit
    for (let exp = 1; Math.floor(maxNum / exp) > 0; exp *= 10) {
        nums = countingSort(nums, exp);
    }
    
    return nums;
}

module.exports = radixSort;