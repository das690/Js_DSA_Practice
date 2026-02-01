var removeDuplicate = function(nums) {
    if(nums.length === 0) {
        return 0;
    }
    let l = 1;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i - 1]) {
            nums[l] = nums[i];
            l++;
        }
    }
    return l;
}
console.log(removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));