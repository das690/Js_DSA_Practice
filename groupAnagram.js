var groupAnagram = function(str) {
    let map = {};
    for(let s of str) {
        let key = s.split('').sort().join('');
        if(!map[key]) {
            map[key] = [];
        }
        map[key].push(s);
    }
    return Object.values(map);
}
console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));