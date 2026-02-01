var firstRotten = function(eggs) {
    let low = 0;
    let high = eggs.length - 1;
    let result = -1;
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        if(eggs[mid] === 1) {
            result = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return result;
}
let carton = [0, 0, 0, 1, 1, 1]; 
console.log(firstRotten(carton));