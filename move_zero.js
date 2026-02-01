var moveZero = function(nums) {
    let l = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            let temp = nums[l];
            nums[l] = nums[i];
            nums[i] = temp;
            l++; 
        }
    }
    return nums;
}
console.log(moveZero([0, 1, 0, 2, 0, 3]));