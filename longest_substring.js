function length(char) {
    let charSet = new Set();
    let left = 0;
    let maxLength = 0;
    for(let right = 0; right < char.length; right++) {
        while(charSet.has(char[right])) {
            charSet.delete(char[left])
            left++;
        }
        charSet.add(char[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}
console.log(length("abcabcbb"));