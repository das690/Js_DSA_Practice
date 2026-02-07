function twoSum(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left < right) {
        let currSum = nums[left] + nums[right];
        if(currSum === target) {
            return [left, right];
        } else if(currSum > target) {
            right--;
        } else {
            left++;
        }
    }
}
console.log(twoSum([2, 8, 7, 11, 15], 9));