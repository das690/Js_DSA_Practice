var reverseString = function(str) {
    let left = 0;
    let right = str.length - 1;
    while(left < right) {
        let temp = str[left];
        str[left] = str[right];
        str[right] = temp;
        right--;
        left++;
    }
    return str;
}
console.log(reverseString(["h","e","l","l","o"]));