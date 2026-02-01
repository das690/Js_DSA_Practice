function twoSum(nums, target) {
    let memory = new Map();
    for(let i = 0; i < nums.length; i++) {
        let currNum = nums[i];
        let NumNeed = target - currNum;
        if(memory.has(NumNeed)) {
            return [memory.get(NumNeed), i];
        }
        memory.set(currNum, i);
    }
}
console.log(twoSum([2,7,11,15], 9));