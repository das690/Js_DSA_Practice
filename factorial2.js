function isFactorial(n) {
    if(n === 1) {
        return 1;
    }
    return n * isFactorial(n -1);
}
console.log(isFactorial(5));