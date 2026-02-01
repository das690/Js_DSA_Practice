function containsDuplicate(nums) {
    let mySet = new Set();
    for(let i = 0; i < nums.length; i++) {
        let currNum = nums[i];
        if(mySet.has(currNum)) {
            return true;
        }
        mySet.add(currNum);
    }
    return false;
}
console.log(containsDuplicate([1,2,3,4,2]));
console.log(containsDuplicate([1,2,3,4,5]));