function dynamicWindow(nums, target) {
    let left = 0;
    let currSum = 0;
    let minLength = Infinity;
    for(let right = 0; right < nums.length; right++) {
        currSum = currSum + nums[right];
        while(currSum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            currSum = currSum - nums[left];
            left++;
        }
    }
    if(minLength === Infinity) {
        return 0;
    } else {
        return minLength;
    }
}
console.log(dynamicWindow([2, 3, 2, 2, 4, 3], 10));