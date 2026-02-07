function slidingWindow(nums, size) {
    let currSum = 0;
    let maxSum = 0;
    for(let i = 0; i < size; i++) {
        currSum = currSum + nums[i];
    }
    maxSum = currSum;
    for(let i = size; i < nums.length; i++) {
        currSum = currSum + nums[i] - nums[i - size];
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
}
console.log(slidingWindow([2, 1, 5, 1, 3, 2], 3));