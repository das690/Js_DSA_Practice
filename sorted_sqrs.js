var sortedSqr = function(nums) {
    let n = nums.length;
    let result = new Array(n);
    let left = 0;
    let right = n - 1;
    let k = n - 1;
    while(left <= right) {
        let leftVal = nums[left] ** 2;
        let rightVal = nums[right] **2;
        if(leftVal > rightVal) {
            result[k] = leftVal;
            left++;
        } else {
            result[k] = rightVal;
            right--;
        }
        k--;
    }
    return result;
}
console.log(sortedSqr([-4, -1, 0, 3, 10]));