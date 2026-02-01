var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while(low <= high) {
        let mid = Math.floor((high + low) / 2);
        let guess = nums[mid];
        if(guess === target) {
            return mid;
        }
        if(guess > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
}
console.log(searchInsert([3, 5, 9, 12], 9));
console.log(searchInsert([1, 3, 5, 6], 2));